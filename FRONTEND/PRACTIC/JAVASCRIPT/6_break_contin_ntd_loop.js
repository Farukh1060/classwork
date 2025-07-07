// break :it will break out of current block

// continue  will break one loop cycle and continue full loop after that
// for(let count = 1;count<=10;count++){
//     if(count ==5){
//         // break;
//         continue;
//     }
//     document.write(count);
//       document.write("<br>");
// }

// nested_loop
outter :for(let count = 1;count<=10;count++){
    document.write(count);
      document.write("<br>");
      for(i=1;i<=2;i++){
        if(count ==3){
            break outter;
            // continue;
        }
        document.write("done");
      document.write("<br>");
      }
}