const removeRightMostCharacter = (element) => {
  
  let text = element.textContent.replace(/\s/g, "");

  

  if (text.length > 0) {
    text = text.slice(0, -1);
    console.log(text);

    element.textContent = text;
  }
}

export default removeRightMostCharacter