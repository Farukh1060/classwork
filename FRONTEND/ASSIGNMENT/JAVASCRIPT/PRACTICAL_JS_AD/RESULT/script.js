let mark = document.getElementsByClassName('marks');
let x=[];

 for (let j = 0; j < mark.length; j++) {
        mark[j].addEventListener("input",sum);

        function sum (){
            
            // console.log(mark[j].value)
             x[j] = Number (mark[j].value)

             let z = mark[j].nextElementSibling
            //  console.log(mark[j].nextElementSibling)
             if(x[j]>50){
                z.className = "err_add"
                // z.classList.add("")
                console.log(z)
            } else if (x[j]<50){
                z.className = "err_rem"
            }
            return x[j]
        }
    }

    // debugger
    document.getElementById("btn").addEventListener("click",sho)
    function sho(){
        let tot_al = 0;
        // console.log(x)
        for(let i =0;i<x.length;i++){
            if(x[i]>50){
                document.getElementById("res").innerText="invalid result"
                return
            }
            tot_al = tot_al + x[i]
        }
        console.log(tot_al)
        document.getElementById("total_marks").innerHTML = tot_al;
        let results = document.getElementById("persentage").innerHTML = ((tot_al/350)*100).toFixed(2);
       if(results >70){

           document.getElementById("res").innerText="pass"
        }else{
            
            document.getElementById("res").innerText="fail"
       }
       return false
    }

    //print pdf

    let down = document.getElementById("down")
    down.addEventListener("click",function(){
        document.querySelector(".res_btn").style = "display:none"
        document.querySelector(".pdf").style = "display:none"
        let pdf = document.querySelector(".container")
        html2pdf(pdf,{
            margin:10,
            filename: "myfile.pdf"
        })
        return false
    })
