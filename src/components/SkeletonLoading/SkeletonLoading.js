import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../styles';

const width = Dimensions.get('window');

const styles = StyleSheet.create({
  movieListCellView: {
    backgroundColor: Colors.GRAY_MEDIUM,
    margin: 10,
    paddingBottom: 10,
    shadowOpacity: 0.5,
    borderRadius: 5,
  },
});

const SkeletonLoading = ({loadingType}) => {
  const movieListCell = () => {
    return (
      <View style={styles.movieListCellView}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={350} height={50} margin={10} />
          <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={130}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
              <SkeletonPlaceholder.Item
                width={200}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={130}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
              <SkeletonPlaceholder.Item
                width={200}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={130}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
              <SkeletonPlaceholder.Item
                width={200}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={130}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
              <SkeletonPlaceholder.Item
                width={200}
                height={20}
                marginLeft={10}
                marginRight={10}
                marginTop={10}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  };

  const movieListView = () => {
    if (loadingType === 'movieListFooter') {
      return <View>{movieListCell()}</View>;
    } else if (loadingType === 'movieListLoader') {
      return (
        <View>
          {movieListCell()}
          {movieListCell()}
          {movieListCell()}
          {movieListCell()}
        </View>
      );
    }
  };
  return movieListView();
};

export default SkeletonLoading;
