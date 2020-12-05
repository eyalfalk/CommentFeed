const style = {
  app: {
    width:'40vw',
    margin:'100px',
    padding: '10px',
    fontFamily:'sans-serif'
  },
  formBox: {
    width: '450px',
    margin:'10px',
    padding: '20px',
    backgroundColor:'#EFEFEF',  
  },
  emailInput: {
    width:'400px',
    margin:'10px',
    padding:'0 10px',
    height:'50px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5'
  },
  messageInput: {
    width:'400px',
    margin:'10px',
    padding:'0 10px',
    height:'100px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5'
  },
  submitInput: {
    width:'100px',
    margin:'10px',
    height:'40px',
    backgroundColor:'#66B2E7',
    color:'#fff',
    textTransform:'uppercase',
    borderRadius:'5px',
    borderWidth: '0px',
    borderColor:'#66B2E7',
    // TODO [EF] move submit button to the right of the form
  },
  feedBox: {
    width: '450px',
    margin: '10px',
    padding: '20px',
    // TODO [EF] ask about scrolling - in page or in feed box?
    // scrolling comments is now done on the whole web page,
    // to scroll within the feed box, uncomment line below:
    //overflowY:'scroll'
  },
  filterInput: {
    width:'400px',
    margin:'10px',
    padding:'0 10px',
    height:'50px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5'
    // TODO [EF] add image left of "Filter" text
    // https://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey.svg
  },
  commentList: {
    width: '400px',
    margin: '10px',
    padding: '10px',
    fontSize:'.85rem'
  },
  comment: {
    width: '400px',
    margin: '10px',
    padding: '10px',
    fontSize:'.85rem'
  },
  avatar: {
    width: '100px',
    margin: '10px',
    padding: '10px',
  },
  commentEmail: {
    width: '300px',
    margin: '10px',
    padding: '10px',
    font: 'bold 20px sans-serif'
  },
  commentMessage: {
    width: '300px',
    margin: '10px',
    padding: '10px',
    font: '20px sans-serif'
  }  
}

export default style;
