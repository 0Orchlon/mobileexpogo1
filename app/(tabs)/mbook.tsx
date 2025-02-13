import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  AntDesign,
   Feather,
    FontAwesome6,
     Ionicons,
      Entypo

} from "@expo/vector-icons";
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView >
      <View style={{ height: 150 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
           {Array.from({ length: 200 }).map((_, index) => (
          <Image
            style={styles.imgContainerTop}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
           ))}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", marginTop:10 }}>
        <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <AntDesign
                name="heart"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <View style={{flexDirection:"row", marginTop:10, width:"100%"}}>
        <Text style={{alignItems:"flex-start" }} >Зөвхөн Mbook-ээс</Text>
        <Feather name="headphones" size={14} color="black" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text> 
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <AntDesign
                name="heart"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
        <Text style={{alignItems:"flex-start", marginTop:10 }}>Анх удаа ном сонсох гэж байна уу?</Text>
      <View style={{flexDirection:"row", width:"100%"}}> 
        <Text >Унших завгүй бол СОНСООД үз</Text>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Feather name="headphones"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{flexDirection:"row", marginTop:10,width:"100%"}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{marginTop:10}} >
      <ImageBackground style={{height:200, maxWidth:"auto"}}
      source={{ uri: 
        "https://wallpapercave.com/wp/wp5485906.jpg"
         }}
    
    >
        <View style={{flexDirection:"row", width:"100%"}}>
        <Text>Credit Books</Text>
        <AntDesign name="star" size={10} color="yellow" style={{ alignItems:"flex-start" }}/>
        </View>
        <View style={{flexDirection:"row", width:"100%"}}>
          <Text>Subscription үйлчилгээг идэвхжүүлээд доорх номуудаас 1-г сонгон сонсоорой</Text>
          <Feather name="headphones" size={10} color="black" style={{alignItems:"flex-start"}}/>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image style={styles.imgContainer} />
            </View>
        {Array.from({ length: 20 }).map((_, index) => (
          <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
                />
                  <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                  <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
      </View>
      <View style={{flexDirection:"row", width:"100%",marginTop:10}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{marginTop:10}} >
      <ImageBackground style={{height:200, maxWidth:"auto"}}
      source={{ uri: 
        "https://w0.peakpx.com/wallpaper/942/857/HD-wallpaper-meme-chan-cute-meme-anime-denpa-chan.jpg"
        }}
    >
        <View style={{flexDirection:"row", width:"100%"}}>
        <Text>Burii-н санал болгох номууд</Text>
        <Text style={{alignSelf:"flex-end", position: "absolute", right:10,}} >Бүгд</Text>

        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image style={styles.imgContainer} />
            </View>
        {Array.from({ length: 20 }).map((_, index) => (
          <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
                />
                  <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                  <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
      </View>
      <View style={{flexDirection:"row", width:"100%", marginTop:10}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{marginTop:10, flexDirection:"row", width:"100%"}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{flexDirection:"row", marginTop:10, width:"100%"}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{flexDirection:"row", marginTop:10, width:"100%"}}> 
        <Text style={{alignItems:"flex-start" }}>Багц номууд</Text>
        <Ionicons name="book" size={14} color="red" style={{ alignItems:"flex-start" }}/>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute"}} >Бүгд</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                            <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
                            <Text style={{marginLeft:10}}>Game Design</Text>
            </View>
          ))}
      </ScrollView>
      
<View style={{flexDirection:"row", width:"100%", marginTop:10}}>
  <Text>Зохиолчид</Text>
  <Entypo name="pencil" size={15} color="black" />
</View>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgProfile}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
                            <Text style={{alignItems:"center",marginLeft:50}}>
                Anon
              </Text>

            </View>
          ))}
      </ScrollView>

<View style={{flexDirection:"row", width:"100%", marginTop:10}}>
  <Text>Зохиолчид</Text>
  <Entypo name="pencil" size={15} color="black" />
</View>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgProfile}
                source={{
                  uri: "https://media.tenor.com/zufgmL_YFNoAAAAi/pepe-arknights.gif",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
              <Text style={{alignItems:"center",marginLeft:50}}>
                Anon
              </Text>
            </View>
          ))}
      </ScrollView>
      
           
      <View style={{flexDirection:"row", width:"100%", marginTop:10}}> 
        <Text style={{alignItems:"flex-start", fontWeight:"black" }}>Mbook номын клуб-с санал болгох нь</Text>
        <Text style={{ alignSelf:"flex-end", right:10, position: "absolute",color:"Yellow"}} >Бүгд</Text>
      </View>
           <View>
            <Text style={{alignItems:"flex-start", fontSize:12}}>Бидний сонссон номууд...</Text>
           </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Entypo name="book"
                size={20}
                color="red"
                style={{ position: "absolute", top: 5, right: 15 }}
              />
  <Text style={{marginLeft:10,fontSize:10}}>Tynan Syv</Text>
  <Text style={{marginLeft:10}}>Game Design</Text>
              </View>
          ))}
      </ScrollView>
      <Text>abc</Text>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function mbook() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "orange" }}
          />
        )}
      />
      <Text>HELLO WORLD</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Cover entire screen
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  imgContainerTop: {
    height: 100,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
  imgProfile:{
    borderRadius:50,
    height:100,
    width:100,
    marginRight:10,
    marginLeft:10

  }
});