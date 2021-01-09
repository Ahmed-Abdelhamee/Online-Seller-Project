photos=[
    "menClothes.jpg","menClothes4.jpg","suit4.jpg",
    "menClothes2.jpg","menClothes5.jpg","menClothes6.jpg","suit.jpg",
    "suit5.jpg","suit3.jpg","menClothes3.jpg"
];


class product{      // Child Class
   
    constructor(){

        this.photos=photos;
        const divContents=document.querySelector("#menu");
        const div2=document.querySelector("#totalLook");
        const preslideShow=document.querySelector('#preFullImg');
        const slideShow=document.querySelector('#fullImg');

        const header=document.createElement('h3');
        header.textContent="click on any product to Show it in details";
        preslideShow.appendChild(header);
        
            for(let j=0;j<this.photos.length;j++){
                
                const beGreateImage1=document.createElement('img');
                beGreateImage1.src=photos[j];
                preslideShow.appendChild(beGreateImage1);
                beGreateImage1.addEventListener('click',showImage);
                slideShow.getElementsByClassName.top=window.pageYOffset+'px';

                const beGreatImage2=document.createElement('img');
                    function showImage(){
                        slideShow.classList.remove('hiddened');
                        document.body.classList.add('no-scroll');

                        const ExitLink=document.createElement('a');
                        ExitLink.href="";
                        ExitLink.classList.add('ExitButtonLink');
                        slideShow.appendChild(ExitLink);

                        const ExitButton=document.createElement('button');
                        ExitButton.textContent=" Exit ";
                        ExitButton.classList.add('Exitbutton');
                        ExitLink.appendChild(ExitButton);
                        ExitButton.addEventListener('click',clearSlideShow);
                        
                        const Previous_Photo=document.createElement('button');
                        Previous_Photo.textContent=" Previous_Photo ";
                        Previous_Photo.classList.add('Previous_Photo');
                        slideShow.appendChild(Previous_Photo);
                        Previous_Photo.addEventListener('click',Previousimg);

                        const Next_Photo=document.createElement('button');
                        Next_Photo.textContent=" Next_Photo ";
                        Next_Photo.classList.add('Next_Photo');
                        slideShow.appendChild(Next_Photo); 
                        Next_Photo.addEventListener('click',Nextimg);
            
                        const beGreatImage2=document.createElement('img');
                        beGreatImage2.src=photos[j];
                        // console.log(beGreatImage2);
                        slideShow.appendChild(beGreatImage2);
                        const header3=document.createElement('h4');
                        header3.textContent="Model: 2021";
                        const header4=document.createElement('h4');
                        header4.textContent="Size: Large";
                        const header5=document.createElement('h4');
                        header5.textContent="Price:475$";
                        slideShow.appendChild(header3);
                        slideShow.appendChild(header4);
                        slideShow.appendChild(header5);
                    }
                    function clearSlideShow(){
                        slideShow.classList.add('hiddened');
                        document.body.classList.remove('no-scroll');
                    }
                    function Nextimg(){
                        const next=document.querySelector('#fullImg img');
                        if(j<9){
                            j++;
                            next.src=photos[j];
                        }else{}
                    }
                    function Previousimg(){
                        const previous=document.querySelector('#fullImg img');
                        if(j>0){
                            j--;
                            previous.src=photos[j];
                        }else{}
                    }
            }



        for(let i=0;i<photos.length;i++){
            const image=document.createElement('img');
            image.src=photos[i];
            divContents.appendChild(image);
            image.addEventListener("click",dispalyProducts);
            const div2=document.querySelector("#totalLook");

                function dispalyProducts(){
                    const header1=document.querySelector('h1');
                    header1.classList.remove('hidden');
                    const imagee=document.createElement('img');
                    imagee.src=photos[i];
                    const div2=document.querySelector("#totalLook");
                    const parag=document.createElement("pre");
                    parag.classList.add("specialSpace");
                    const parag1=document.createElement("pre");
                    const parag2=document.createElement("pre");
                    const parag3=document.createElement("pre");
                    parag3.classList.add("specialSpace1");
                    parag.textContent="Made in: Egypt";
                    parag1.textContent="Size: X_Large";
                    parag2.textContent="Model: 2021";
                    parag3.textContent="Sale: 20%";
                    div2.appendChild(imagee);
                    div2.appendChild(parag);
                    div2.appendChild(parag1);
                    div2.appendChild(parag2);
                    div2.appendChild(parag3);
                    // div2.getElementsByClassName.top=window.pageYOffset+'px';
                    image.removeEventListener("click",dispalyProducts);
                    div2.classList.remove("hidden");
                    //div2.addEventListener('click',clear);
                }
                }function clear(){
                    div2.classList.add("hidden");
            }
            const toPay=document.createElement("a");
            toPay.href="Buy Products.html";
            const button =document.createElement('button');
            toPay.appendChild(button);
            button.textContent="Press To Pay ";
            div2.appendChild(toPay);

    }
}

class seller{           // Pernet Class
    constructor(){
        const show=new product();
        this.customerRequest=this.customerRequest.bind(this);
        document.addEventListener('click',this.customerRequest);
        } 
    customerRequest(){
        console.log("the Customer Want to Buy some Products");
    }
}
const showProject=new seller();