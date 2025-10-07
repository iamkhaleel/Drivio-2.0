import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('../../assets/images/onboarding1.jpeg'),
    title: 'Welcome to Drivio\nRide Anytime!',
  },
  {
    id: 2,
    image: require('../../assets/images/youngphonemap.jpg'),
    title: 'Quick and simple\nride booking!',
  },
  {
    id: 3,
    title: 'Start Your Journey\nwith Drivio!',
    image: require('../../assets/images/onboarding3.jpg'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      {slides.map((slide, index) => (
        <ImageBackground
          key={slide.id}
          source={slide.image}
          style={styles.slide}
        >
          {/* {(index === 0 || index === 1) && (
            <Text style={styles.logo}>Qbar</Text>
          )} */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{slide.title}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {index < slides.length - 1 ? (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { marginLeft: 10 }]}
                  onPress={handleNext}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  logo: {
    position: 'absolute',
    top: 50,
    fontSize: 150,
    color: '#0F0E0E',
    // fontFamily: 'cursive',
  },
  textContainer: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFCFB',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFFCFB',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFCFB',
    width: 32,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
});
