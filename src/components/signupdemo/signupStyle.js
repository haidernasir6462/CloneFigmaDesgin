import styled from "styled-components";

export const Body = styled.body`
    display: flex;
    align-items: center;
    background-color: rgb(73, 73, 73);
    justify-content: center;
    height: 1000px;
`;

export const Main = styled.div`
    background-color: blanchedalmond !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 440px;
    height: 500px;
`;

export const Form = styled.form`
    width: 400px;
    height: 500px;
    .content{
        position: relative;
        margin: 20px;            
        
        label{
            font-family:monospace;
            font-size: 16px;
        }
        input{
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 5px;
        }
        i{
            position: absolute;
            top: 40%;
            left: 94%;
            font-size: 13px;
            visibility: hidden;
        }
        small{
            font-size: 14px;
            font-family: 'Times New Roman', Times, serif;
            visibility: visible;
        }
        


        .content.success input{
            border-color: rgb(32, 156, 32); //green
            border-width: 2px;
        }
        .content.success i.fa-check-circle{
            color:rgb(32, 156, 32);
            visibility: visible;
        }
        .content.success small{
            visibility: hidden;
        }
        .content.error input{
            border-color: rgb(212, 27, 27);
            border-width: 2px;
        }
        .content.error i.fa-exclamation-circle , .content.error small{
            color:rgb(212, 27, 27);
            visibility: visible ;
        }
    }
`;

export const Button = styled.button`
    background-color: rgba(153, 202, 78, 0.904);
    font-size: 20px;
    width: 80%;
    margin: 0px 10%;
    padding: 5px;
    border-radius: 5px;
`;






// *{
//     box-sizing: border-box;
//     margin: 0px;
//     padding: 0px;
// }
