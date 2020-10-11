let page = {
  _content: '',
  setContent(content){
    this.content = content
  },
  getContent(){
    return document.querySelector('body').innerHTML = this.content

  }
}
page.setContent('<p>Hello</p>')
page.getContent()
