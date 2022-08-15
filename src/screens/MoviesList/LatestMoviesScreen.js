import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Constants from '../../helpers/Constants';
import {Colors, Font} from '../../styles';

const styles = StyleSheet.create({
  logo: {
    width: '20%',
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    alignContent: 'flex-end',
  },
  box: {
    margin: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  titleText: {
    ...Font.FONT_BOLD,
    fontSize: Font.FONT_SIZE_15,
  },
  textStyle: {
    ...Font.FONT_REGULAR,
    fontSize: Font.FONT_SIZE_15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginTop: 20,
  },
});

const LatestMoviesScreen = () => {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(
        `${Constants.BASE_URL}/3/movie/latest?api_key=${Constants.API_KEY}&language=en-US`,
        requestOptions,
      );
      const result = await response.json();
      setMovieList(result);
    } catch (error) {
      console.log('error  == ', error);
    }
  };

  const renderText = (title, value) => {
    return (
      <Text style={[styles.titleText, {margin: 5}]}>
        {title} <Text style={styles.textStyle}>{value}</Text>
      </Text>
    );
  };

  return (
    <>
      <Text style={styles.title}>Latest Movies</Text>
      <View style={{backgroundColor: Colors.GRAY_MEDIUM, height: '100%'}}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.box}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movieList.poster_path}`,
                }}
                style={{width: 370, height: 100}}
              />
              {renderText('Movie Name : ', movieList.title)}
              {renderText('Ratings : ', `${movieList.vote_average} / 10`)}
              {renderText('Popularity : ', movieList.popularity)}
              {renderText('Release On : ', movieList.release_date)}
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default LatestMoviesScreen;
