var x,a,b,c;
        x = parseInt(prompt("enter the number !!\n1 : addttion\n 2 : subtraction \n3 : multiplication\n4 : division"));
        switch (x) {
            case 1: {
                a =parseInt (prompt("enter num"));
                b =parseInt (prompt("enter num"));
                c=a+b;
                console.log(c);
                break;
            }
            case 2:{
                a =parseInt (prompt("enter num"));
                b =parseInt (prompt("enter num"));
                c=a-b;
                console.log(c);
                break;
            }
            case 3 : {
                a =parseInt (prompt("enter num"));
                b =parseInt (prompt("enter num"));
                c=a*b;
                console.log(c);
                break;
            }
            case 4: {
                a =parseInt (prompt("enter num"));
                b =parseInt (prompt("enter num"));
                c=a/b;
                console.log(c);
                break;
            }
            default:{ console.log("improper number");
                break;
            }
            
        }