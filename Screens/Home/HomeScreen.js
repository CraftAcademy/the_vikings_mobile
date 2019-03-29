import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { GetArticles } from "../../Services/ArticlesApiService";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          articles: []
        };
      }
    
    componentDidMount() {
        GetArticles().then(res => {
          this.updateArticlesStateHandler(res);
        });
      }
    
    updateArticlesStateHandler(articles) {
        this.setState({
          articles: articles
        });
    }

    renderArticles({ item }) {
        const article = item;
        return (
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: article.image }}
            />
            <Text>{article.title}</Text>
            <Text>{article.lead}</Text>
            <Text>{article.content}</Text>
          </View>
        );
    }
      
    render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.articles}
        renderItem={this.renderArticles.bind(this)}
        keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});