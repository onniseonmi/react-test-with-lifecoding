import React, {Component} from "react";
import TOC  from "./components/TOC";
import ReadContent  from "./components/ReadContent";
import CreateContent  from "./components/CreateContent";
import Subject  from "./components/Subject";
import Control  from "./components/Control";





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "create",
      selected_content_id: 2,
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
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      let i =0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break
        }
        i+=1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent></CreateContent>
      console.log("create");
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
        <TOC onChangePage ={function(id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)} 
         data={this.state.contents}
         ></TOC>
         <Control onChangeMode={function(_mode) {
           this.setState({
             mode : _mode
           });
         }.bind(this)}></Control>
        {_article}
      </div>
    )
  }
}
export default App;
