import React, {Component} from "react";
import TOC  from "./components/TOC";
import Content  from "./components/Content";
import Subject  from "./components/Subject";





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "read",
      subject: {
        title: "최선미",
        sub: "개발자"
      },
      welcome:{
        title: "Welcome", 
        desc:"Hello, React!!!"
      },
      contents:[
        {id:1, title:"react", desc:'잘하고 싶다'},
        {id:2, title:"진짜", desc:'잘하고 싶다'},
        {id:3, title:"JavaScript", desc:'잘하고 싶다'}

      ]
    }
  }
  render() {
    console.log("app render");
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc
    }
    return (
      <div className="App">
        <Subject 
        title ={this.state.subject.title} 
        sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}
export default App;
