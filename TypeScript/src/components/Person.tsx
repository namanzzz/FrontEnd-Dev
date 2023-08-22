import * as React from 'react';
import {FC, useState} from 'react'


 export enum HairColor{
    Blonde = "Your hair color is blonde",
    Brown = "Cool hair color",
    Pink = "yo thats sick"
 }

 interface Props {
   name: string;
   age: number;
   email: string;
//    getAddress: (name: string) => string;
//    name? : string;  (for optional)
   hairColor: HairColor
 }


   
export const Person: FC<Props> =  (props: Props) => {

    const [country, setCountry] = useState<string | null>("")
    
    type NameType = "Pedro" | "Jack" | "Manuel"
    const nameForType: NameType = "Manuel"

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value)
    }
  return (
    <div>
     <h1>{props.name}</h1>
     <h1>{props.email}</h1>
     <h1>{props.age}</h1>
     <h1>{props.hairColor}</h1>

     <input placeholder='write down ur country...' onChange={handleChange} />
     
     {country}
     {/* {HairColor.Blonde}
     {HairColor.Pink} */}


    </div>
  );
}
