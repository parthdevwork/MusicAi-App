// import { Animated, Text, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import { styles } from "./style";
// import MGradient from "../../components/Gradient";
// import LinearGradient from "react-native-linear-gradient";
// import MImage from "../../components/Image";
// import { IMAGES } from "../../constants/image";

// const Meter = () => {
//   const [cent, setCent] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(cent, {
//       toValue: cent,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const cents = cent.interpolate({
//     inputRange: [0, 360],
//     outputRange: ["0deg", "360deg"],
//   });

//   const pointerStyle = {
//     transform: [{ rotate: '60deg' }, { translateX:-10 }, { translateY: -35 }],
//   };
//   return (
//     <View style={styles.meterContainer}>
//       <View style={styles.meterSubContainer}>
//         <Animated.View style={[styles.demo, pointerStyle]}>
//           <MImage
//             src={IMAGES.ACTIVE}
//             imageStyle={[styles.indicator, { bottom: 0, left: 0 }]}
//           />
//         </Animated.View>

//         {/* <MGradient linearView={styles.origin} /> */}
//       </View>
//     </View>
//   );
// };

// export default Meter;

import {Animated, StyleSheet, View} from "react-native";
import React, {useEffect, useRef} from "react";
import MText from "../../components/Text";
import {FONTSIZE} from "../../constants/font";
import MImage from "../../components/Image";
import {IMAGES} from "../../constants/image";
import MGradient from "../../components/Gradient";
import {COLORS} from "../../constants/color";

const Meter = data => {
  console.log("value:", data);
  const cents = useRef(new Animated.Value(0)).current;

  let value = data?.data?.note?.value;
  useEffect(() => {
    Animated.timing(cents, {
      toValue: value === undefined ? 0 : cents,
      duration: 10,
      useNativeDriver: true,
    }).start();
  }, [cents]);

  let cent = cents.interpolate({
    inputRange: [-360, 360],
    outputRange: ["-360deg", "360deg"],
  });
  console.log("centiii->", cent);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 185,
          width: 185,
          borderRadius: 180,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <MText
          label={"A"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 10,
            top: 85,
            color: "white",
          }}
        />

        <MText
          label={"Bb"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 20,
            top: 46,
            color: "white",
          }}
        />
        <MText
          label={"B"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 50,
            top: 20,
            color: "white",
          }}
        />
        <MText
          label={"C"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 88,
            top: 10,
            color: "white",
          }}
        />
        <MText
          label={"C#"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 125,
            top: 18,
            color: "white",
          }}
        />
        <MText
          label={"D"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 155,
            top: 46,
            color: "white",
          }}
        />

        <MText
          label={"Eb"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 160,
            top: 85,
            color: "white",
          }}
        />
        <MText
          label={"E"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 155,
            top: 124,
            color: "white",
          }}
        />
        <MText
          label={"F"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 128,
            top: 154,
            color: "white",
          }}
        />

        <MText
          label={"F#"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 88,
            bottom: 5,
            color: "white",
          }}
        />

        <MText
          label={"G"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 46,
            bottom: 16,
            color: "white",
          }}
        />
        <MText
          label={"Ab"}
          labelStyle={{fontSize: FONTSIZE.TWELVE}}
          viewStyle={{
            position: "absolute",
            left: 15,
            bottom: 45,
            color: "white",
          }}
        />
        <Animated.View
          style={[
            styles.animationStyle,
            {
              transform: [
                {rotate: value === undefined ? -360 + "deg" : value + "deg"},
              ],
            },
          ]}>
          {/* <View style={{ height: 75, width: 3, backgroundColor: "red" }} />
           */}
          <MImage
            src={IMAGES.ACTIVE}
            imageStyle={{height: 6, width: 100}}
            viewStyle={{position: "absolute", alignSelf: "center", right: 55}}
          />
          <MGradient
            linearView={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignSelf: "center",
            }}
          />
        </Animated.View>
      </View>

      {/* <TouchableOpacity
        style={{marginTop: 10}}
        onPress={
          (Animated.timing(cents, {
            toValue: 360,
            duration: 500,
            useNativeDriver: true,
          }).start(),
          setTimeout(() => {
            cents.setValue(0);
          }, 500))
        }> */}
      {/* <MText
          label={"Clock"}
          viewStyle={{ backgroundColor: "red" }}
          labelStyle={{ color: "white" }}
        /> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Meter;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: COLORS.GRAY[600],
    borderWidth: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "85%",
    height: "35%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
  },
  animationStyle: {
    height: 150,
    width: 150,
    position: "absolute",
    borderRadius: 125,
    alignItems: "center",
    justifyContent: "center",
  },
});
