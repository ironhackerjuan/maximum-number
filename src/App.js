export class App {
  maximunPossibleNumber5(number) {

    const stringNumber = String(number)
    const numberStringArray = stringNumber.split("")
    const newArray = []

    for(let i = 0; i < stringNumber.length; i++) {
      if(Number(stringNumber[i]) < 5) {
        newArray.push('5')
        break
      } else {
        return newArray.push(stringNumber[i])
        continue
      }
    }

    return Number(newArray.concat(stringNumber).join("")) 

    // console.log(Number(numberStringArray))
    // return Number(numberStringArray)

  }
}














