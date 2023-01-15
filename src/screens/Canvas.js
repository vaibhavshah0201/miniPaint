import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { DragResizeBlock } from "react-native-drag-resize";
import DoubleClick from "react-native-double-tap";

const CanvasScreen = () => {
  const [displaySquare, setDisplaySquare] = useState(false);
  const [displayCircle, setDisplayCircle] = useState(false);
  const [displayTriangle, setDisplayTriangle] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  const renderCircle = () => {
    setDisplayCircle(true);
  };

  const renderTriangle = () => {
    setDisplayTriangle(true);
  };

  const renderSquare = () => {
    setDisplaySquare(true);
  };

  const renderText = () => {
    setDisplayText(true);
  };

  const removeItem = (itemName) => {
    if (itemName == "square") {
      setDisplaySquare(false);
    } else if (itemName == "circle") {
      setDisplayCircle(false);
    } else if (itemName == "triangle") {
      setDisplayTriangle(false);
    } else if (itemName == "text") {
      setDisplayText(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaCotainer}>
      <View style={styles.canvasArea}>
        <View style={styles.container}>
          {displaySquare && (
            <DragResizeBlock x={0} y={0}>
              <DoubleClick doubleTap={() => removeItem("square")}>
                <View style={styles.squareBox} />
              </DoubleClick>
            </DragResizeBlock>
          )}
          {displayCircle && (
            <DragResizeBlock x={0} y={0}>
              <DoubleClick doubleTap={() => removeItem("circle")}>
                <View style={styles.circleBox} />
              </DoubleClick>
            </DragResizeBlock>
          )}
          {displayTriangle && (
            <DragResizeBlock x={0} y={0}>
              <DoubleClick doubleTap={() => removeItem("triangle")}>
                <View style={styles.triangleBox} />
              </DoubleClick>
            </DragResizeBlock>
          )}
          {displayText && (
            <DoubleClick doubleTap={() => removeItem("text")}>
              <DragResizeBlock x={0} y={0}>
                <TextInput
                  placeholder="Enter your text here"
                  style={{
                    color: "black",
                    fontWeight: 'bold',
                    height: "100%",
                    width: "100%",
                    fontSize: 20,
                  }}
                ></TextInput>
              </DragResizeBlock>
            </DoubleClick>
          )}
        </View>
      </View>
      <View style={styles.componentArea}>
        <TouchableOpacity style={styles.squareButton} onPress={renderSquare} />
        <TouchableOpacity style={styles.circleButton} onPress={renderCircle} />
        <TouchableOpacity
          style={styles.triangleButton}
          onPress={renderTriangle}
        />
        <TouchableOpacity style={styles.textButton} onPress={renderText}>
          <Text>Text</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaCotainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  // container: {
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
  canvasArea: {
    alignSelf: "center",
    backgroundColor: '#fff',
    width: '90%',
    height: '80%',
    borderColor: 'black',
    borderWidth: 1
    // backgroundColor: 'grey',
    // justifyContent: 'center',
  },
  componentArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 90,
    backgroundColor: "#D3D3D3",
    width: "100%",
    alignSelf: "flex-end",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  squareBox: {
    height: "100%",
    width: "100%",
    // backgroundColor: "blue",
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
  },
  circleBox: {
    height: "100%",
    width: "100%",
    // backgroundColor: "blue",
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100 / 2,
  },
  triangleBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    // borderBottomColor: "blue",
    borderColor: 'black',
    borderWidth: 2,
  },
  squareButton: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    alignSelf: "center",
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
  triangleButton: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
  textButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CanvasScreen;
