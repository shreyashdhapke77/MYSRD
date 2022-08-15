import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import SkeletonLoading from '../../components/SkeletonLoading/SkeletonLoading';
import Constants from '../../helpers/Constants';
import {Colors} from '../../styles';
import MovieComponent from './MovieComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    alignContent: 'flex-end',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginTop: 20,
  },
});

const TopRatedMoviesScreen = ({navigation}) => {
  const [movieList, setMovieList] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);

  React.useEffect(() => {
    getMovies(pageNo);
  }, []);

  const getMovies = async pgNo => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(
        `${Constants.BASE_URL}/3/movie/top_rated?api_key=${Constants.API_KEY}&language=en-US&page=${pgNo}`,
        requestOptions,
      );
      const result = await response.json();
      let mvList = movieList;
      setMovieList([...mvList, ...result.results]);
    } catch (error) {
      console.log('error  == ', error);
    }
  };

  const nextPage = () => {
    let newPage = pageNo + 1;
    setPageNo(newPage);
    getMovies();
    renderMovieListView();
  };

  const renderFooter = () => {
    return <SkeletonLoading loadingType={'movieListLoader'} />;
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <MovieComponent item={item} index={index} navigation={navigation} />
      </View>
    );
  };

  const renderMovieListView = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top Rated Movies</Text>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={movieList}
          renderItem={renderItem}
          // ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={nextPage}
        />
      </View>
    );
  };
  return renderMovieListView();
};

export default TopRatedMoviesScreen;
