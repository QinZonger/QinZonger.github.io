
export function add (arr,n) {
      let firstitem = arr[0].split(',')
      let lastitem = arr[arr.length - 1].split(',')
      let cenitem = arr.slice( 1 , arr.length - 1 )
      let cennew = []
      while(cennew.length<n){
        let index = Math.ceil(Math.random() * cenitem.length - 1 ) //数组随机下标
        if( ! cennew.includes(cenitem[index]) ) {
              cennew.push(cenitem[index])
        }
      }
      return  firstitem.concat(cennew,lastitem);     
}