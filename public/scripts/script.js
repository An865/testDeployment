let doc = document.getElementById('iFrame').contentWindow.document;

async function fetchData(){
   try{
      const response = await fetch('http://localhost:8080/api/data')
      const data = await response.json();
      return data;
   } catch(error){
      console.log(error)
   }
}
 
async function renderData(){
   doc.open()
   const roughData = await fetchData();
   let beagleData = roughData[0].breeds[0];
   console.log(beagleData)
   for(let propt in beagleData){
      doc.write(propt + ': ' + beagleData[propt] + '<br>')
   }
   doc.close();
}

renderData()

