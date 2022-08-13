import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
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

const MovieComponent = data => {
  const detailAction = item => {
    data.navigation.navigate('MovieDetails', {movieDetail: item});
  };
  const renderText = (title, value) => {
    return (
      <Text style={[styles.titleText, {margin: 5}]}>
        {title} <Text style={styles.textStyle}>{value}</Text>
      </Text>
    );
  };

  const renderUi = item => {
    return (
      <TouchableOpacity onPress={() => detailAction(item)}>
        <View style={styles.box}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={{width: 370, height: 100}}
          />
          {renderText('Movie Name : ', item.title)}
          {renderText('Ratings : ', `${item.vote_average} / 10`)}
          {renderText('Popularity : ', item.popularity)}
          {renderText('Release On : ', item.release_date)}
        </View>
      </TouchableOpacity>
    );
  };

  const renderMovieOverView = item => {
    return (
      <View style={{backgroundColor: Colors.GRAY_MEDIUM}}>
        {renderUi(item)}
      </View>
    );
  };

  return renderMovieOverView(data.item);
};

export default MovieComponent;
