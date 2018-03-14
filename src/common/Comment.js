import React, {
  Component
} from 'react'
// import {
//   Input,
// } from 'antd';
import commentStyle from './Comment.css';
// const {
//   TextArea
// } = Input;

//该页面的头部
class CommentHead extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    value: {
      title: '我是题目',
      content: '我是内容'
    }
  }
  render() {
    return (
      <div className={commentStyle["messageBoard-mainContent-head"]}>
            <div className={commentStyle["messageBoard-mainContent-headInfo"]}>
              <div className={commentStyle["messageBoard-mainContent-title"]}>{this.props.value.title}</div>
              <div className={commentStyle["messageBoard-mainContent-content"]}>{this.props.value.content}</div>
            </div>
            <div onMouseOver ={()=>{this.props.PisVisible(false);this.props.buttIsVisible(true)}} className={commentStyle["messageBoard-mainContent-headText"]}>
            <p style={{visibility:this.props.value.isPvisible?"visible":"hidden"}}>{this.props.value.order}</p>
            </div>
          </div>
    )
  }
}

class NormalHead extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={commentStyle["messageBoard-mainContent-head"]}>
          <div className={commentStyle["messageBoard-mainContent-headInfo"]}>
            <div className={commentStyle["messageBoard-mainContent-title"]}>{this.props.value.title}</div>
            <div className={commentStyle["messageBoard-mainContent-content"]}>{this.props.value.content}</div>
          </div>
            <div className={commentStyle["messageBoard-mainContent-headText"]} >
            <p></p>
            </div>
      </div>
    )
  }
}

//该页面的中部
class ReplyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxIsVisible: false,
      replyButtIsVisible: true,
      imgIsVisible: false,
      imgAddr: null,
    }
  }
  boxIsVisible(flag) {
    this.setState({
      boxIsVisible: flag
    })
    // console.log("改过来吗", this.state.boxIsVisible);
  }
  replyButtIsVisible(flag) {
    this.setState({
      replyButtIsVisible: flag
    })
  }
  imgIsVisible(flag) {
    this.setState({
      imgIsVisible: flag
    })
  }
  imgAddr(addr) {
    this.setState({
      imgAddr: addr
    })
  }

  //点击回复时隐藏回复按钮并展开评论框
  reply() {
    this.boxIsVisible(true);
    this.replyButtIsVisible(true);
    //console.log("改过来吗", this.state.boxIsVisible);
  }

  //判断上传是否成功，设置相应参数
  checkState() {
    var str;
    if (1) {
      this.props.currentState('true');
      this.imgAddr('./img/success.png');
    } else {
      this.props.currentState('false');
      this.imgAddr('./img/fail.png');
    }
  }

  //上传之后的回应
  submit() {
    this.checkState();
    this.imgIsVisible(true);
    let text = document.getElementById('TextArea');
    //console.log(text.value);
    //this.props.setText(text.value);
    // this.props.commIsVisible(true);
    setTimeout((function() {
        this.imgIsVisible(false)
      }).bind(this),
      1000
    );
    setTimeout((function() {
      if (this.props.value.upload) {
        this.boxIsVisible(false);
        this.replyButtIsVisible(true);
      } else {
        text.value = null;
      }
    }).bind(this), 2000);
  }

  render() {
    return (
      <div className={commentStyle["messageBoard-mainContent-reply"]}>  

            <div className = {commentStyle["messageBoard-mainContent-replyTrigger"]}> 
              <div className={commentStyle["replyTrigger-blank"]}>&nbsp;</div>
              <div><a id="reply" onClick={()=>this.reply()} style={{display:this.state.replyButtIsVisible?"flex":"none"}}>回复</a></div>
            </div>
            <hr></hr>

            <div className={commentStyle["messageBoard-mainContent-replyBox"] } style={{display:this.state.boxIsVisible?"flex":"none"}}>
              <div className={commentStyle["messageBoard-mainContent-replyBox-submit"]}   style={{display:this.state.boxIsVisible?"flex":"none"}}>
                <div className={commentStyle["messageBoard-mainContent-replyBox-blankspace"] }>&nbsp;</div>
                <div id="submitButton" style={{display:this.state.boxIsVisible?"flex":"none"}}><a onClick={()=>this.submit()}>提交</a></div>
              </div>

              <div className={commentStyle["messageBoard-mainContent-replyBox-input"]}  style={{display:this.state.boxIsVisible?"flex":"none"}}>     
               <textarea></textarea>
              </div>
            <div className={commentStyle["messageBoard-mainContent-replyBox-notification"]}><img id="img" style={{visibility:this.state.imgIsVisible?"visible":"hidden"}} src={this.state.imgAddr} ></img></div>
            </div> 
            </div>
    )
  }
}



//该页面的评论list部分
class CommentBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = {commentStyle["messageBoard-mainContent-body"]} >
              <div className={commentStyle["messageBoard-mainContent-body-blank"]}>&nbsp;</div> 
              <div className = {commentStyle["messageBoard-mainContent-body-content"]} >
                <div className={commentStyle["messageBoard-mainContent-body-item"]}>{this.props.value.comment}</div> 
              </div>                     
            </div>
    )
  }
}

//该页面的按钮部分
class SortButton extends React.Component {
  render() {
    return (
      <div className={commentStyle["messageBoard-sortButton-innerBox"]}>
        <div><a className={commentStyle["a-button"]}  onClick={()=>{this.props.changeState('按时间排序');this.props.buttIsVisible(false);this.props.PisVisible(true)}}>按时间排序</a></div>
    <div><a className={commentStyle["a-button"]}  onClick={()=>{this.props.changeState('按回复数排序');this.props.buttIsVisible(false);this.props.PisVisible(true)}}>按回复数排序</a></div>
      </div>
    );
  }
}



class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      comment: [],
      order: '按时间排序',
      upload: true,
      isInputVisible: false,
      isButtVisible: false,
      isPvisible: true,
      conmmentText: 'dddd',
      //commIsVisible: false,
    };
  }

  //用于使能从子组件修改父组件的state值
  currentState(msg) {
    this.setState({
      upload: msg
    });
  }
  /*所有的回复版面的内容放在名为class="messageBoard"的盒子里，
  该盒子在左侧导航栏的右边*/
  changeState(msg) {

    this.setState({
      order: msg
    });
  }
  commIsVisible(flag) {
    this.setState({
      commIsVisible: flag
    })
  }
  buttIsVisible(flag) {
    this.setState({
      isButtVisible: flag
    })
  }
  PisVisible(flag) {
    this.setState({
      isPvisible: flag
    })
  }
  render() {
    return (
      // 头部信息即题目+内容简介
      // 一个题目为一个mainContent，排列在messageBoard-display大盒子中
      // messageBoard-sortButton是右侧的按钮的盒子
      <div className={commentStyle["messageBoard"]}>
      <div className={commentStyle["messageBoard-sec"]}>
          <div classNamcommentStylee={commentStyle["messageBoard-mainContent"]}>  
            <CommentHead value={this.state} buttIsVisible = {flag => this.buttIsVisible(flag)}   PisVisible={flag=>this.PisVisible(flag)}/>
            <ReplyBox value={this.state} currentState = {msg => this.currentState(msg)} />
            <CommentBody value={this.state}/>    

          </div>       
          <div className={commentStyle["messageBoard-sortButton"]} style={{visibility:this.state.isButtVisible?"visible":"hidden"}} >
            <SortButton changeState = {msg => this.changeState(msg)} buttIsVisible = {flag => this.buttIsVisible(flag)}   PisVisible={flag=>this.PisVisible(flag)}/>
          </div>
       </div>
       <NormalComment />
      </div>

    );
  };
}


class NormalComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      comment: [],
      upload: true,
      isInputVisible: false,
    };
  }
  //用于使能从子组件修改父组件的state值
  currentState(msg) {
    this.setState({
      upload: msg
    });
  }
  /*所有的回复版面的内容放在名为class="messageBoard"的盒子里，
  该盒子在左侧导航栏的右边*/

  render() {
    return (
      // 头部信息即题目+内容简介
      // 一个题目为一个mainContent，排列在messageBoard-display大盒子中
      // messageBoard-sortButton是右侧的按钮的盒子
      <div className={commentStyle["messageBoard-sec"]}>
          <div className={commentStyle["messageBoard-mainContent"]}>  
            <NormalHead value={this.state}/>
            <ReplyBox value={this.state} currentState = {msg => this.currentState(msg)} />
            <CommentBody value={this.state}/>    

          </div>       
          <div className={commentStyle["messageBoard-sortButton"]} >
          </div>
      </div>

    );
  };
}

export {
  Comment
};