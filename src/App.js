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
        title: "우리는",
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
  }//생성자
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
    console.log('render', this)//this는 컴포넌트 자신을 가리킴
    return (
      <div className="App">
        <Subject 
        title ={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={ function() {
          this.setState({mode:'welcome'})
        }.bind(this)}></Subject>
        {/* <header>
          <h1><a href="/"onClick={function(e){
            console.log(e);
            e.preventDefault();// 링크를 클릭했을때 페이지가 바뀌는 것을 막음
            this.setState({
              mode:'read'
            })//리액트 알게 값을 바꾼다
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}
export default App;
