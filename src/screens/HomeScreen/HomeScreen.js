import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors, Font} from '../../styles';
import Logo from '../../../assets/images/my_img.png';
import Banner, {IndicaterType} from '../../components/Banner/Banner';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 370,
    height: 80,
    margin: 10,
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
  buttonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLACK,
    textAlign: 'center',
    marginTop: 25,
  },
  banner: {
    width: width,
    height: 200,
    backgroundColor: 'white',
  },
  iconSize: {
    width: width,
    height: 200,
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://image.tmdb.org/t/p/w500/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg',
        'https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
        'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        'https://image.tmdb.org/t/p/w500/tVbO8EAbegVtVkrl8wNhzoxS84N.jpg',
        'https://image.tmdb.org/t/p/w500/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg',
        'https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
        'https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
      ],
    };
  }

  render() {
    const onProfilePress = () => {
      this.props.navigation.navigate('Profile');
    };

    const onLatest = () => {
      this.props.navigation.navigate('LatestMovies');
    };

    const onNow = () => {
      this.props.navigation.navigate('NowPlayingMovies');
    };

    const onPopular = () => {
      this.props.navigation.navigate('MoviesList');
    };

    const onTopRated = () => {
      this.props.navigation.navigate('TopRatedMovies');
    };

    const onUpcoming = () => {
      this.props.navigation.navigate('UpcomingMovies');
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Movies Play List</Text>
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={Logo}
              style={[styles.logo, {height: 50, margin: 10}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Banner
            style={styles.banner}
            autoLoop={true}
            autoPlay={true}
            duration={2000}
            indicaterType={IndicaterType.dot}>
            {this.state.images.map((item, index) => {
              return (
                <Image
                  // key={`banner_image_ex_${index}`}
                  source={{uri: item}}
                  style={styles.iconSize}
                />
              );
            })}
          </Banner>

          {/* <TouchableOpacity onPress={onLatest}>
            <View style={[styles.box, {backgroundColor: Colors.LIGHT_YELLOW}]}>
              <Text style={styles.buttonTitle}>Latest Movies</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={onNow}>
            <View style={[styles.box, {backgroundColor: Colors.LIGHT_GREEN}]}>
              <Text style={styles.buttonTitle}>Now Playing Movies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPopular}>
            <View
              style={[styles.box, {backgroundColor: Colors.EXTRA_LIGHT_BLUE}]}>
              <Text style={styles.buttonTitle}>Popular Movies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onTopRated}>
            <View style={[styles.box, {backgroundColor: Colors.LIGHT_RED}]}>
              <Text style={styles.buttonTitle}>Top Rated Movies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onUpcoming}>
            <View style={[styles.box, {backgroundColor: Colors.GRAY_DARK}]}>
              <Text style={styles.buttonTitle}>Upcoming Movies</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
