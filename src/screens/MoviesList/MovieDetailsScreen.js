import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Linking} from 'react-native';
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
});

const MovieDetailsScreen = ({navigation, route}) => {
  const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    if (route && route.params && route.params.movieDetail) {
      getMovieDetails(route.params.movieDetail.id);
    }
  }, []);

  const getMovieDetails = async movieId => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=28cdf46619e7d18e948d072ccb6f0fbb&language=en-US`,
        requestOptions,
      );
      const result = await response.json();
      setMovieDetails(result);
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

  const renderUi = () => {
    return (
      <ScrollView>
        <View style={styles.box}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            }}
            style={{width: 370, height: 400}}
          />
          {renderText('Movie Name : ', movieDetails.title)}
          {renderText('Status of Movie : ', movieDetails.status)}
          {renderText('Ratings : ', `${movieDetails.vote_average} / 10`)}
          {renderText('Rated By : ', movieDetails.vote_count)}
          {renderText('Popularity : ', movieDetails.popularity)}
          {renderText('Release On : ', movieDetails.release_date)}
          {renderText('Language : ', 'English')}
          {renderText('Description : ', movieDetails.overview)}
          {renderText(
            'More Details : ',
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              {movieDetails.homepage}
            </Text>,
          )}
        </View>
      </ScrollView>
    );
  };

  const renderMovieOverView = () => {
    return (
      <View style={{backgroundColor: Colors.GRAY_MEDIUM}}>
        {movieDetails && renderUi()}
      </View>
    );
  };

  return renderMovieOverView();
};

export default MovieDetailsScreen;
