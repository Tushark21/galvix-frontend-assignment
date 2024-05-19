import { IMAGE_URL, PEOPLE_URL, SPECIES_URL } from "../Constants/urls";
import colorNameList from 'color-name-list';

const generateDate=(dateString)=>{
    var date = new Date(dateString);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;    
    var d = date.getDate();    
    m = (m < 10) ? '0' + m : m; 
    d = (d < 10) ? '0' + d : d;
    
    return [d, m, y].join('-');
}

const generatePeopleURL = (query)=>{
    return PEOPLE_URL + `?${query}`;
}

const getImageUrl = (url) => {
    const imageUrl = url.replace(PEOPLE_URL, IMAGE_URL);
    return imageUrl.substring(0, imageUrl.length-1)+ '.jpg';
}

const getIndexFromSpecies = (species)=>{
    let color = species.length>0 ? species[0].replace(SPECIES_URL, '') : '0/';
    return color.substring(0, color.length-1);
}

const getColor = (colorIdx)=>{
    const color = parseInt(colorIdx);
    return colorNameList[color*10].hex;
}


export { generateDate, generatePeopleURL, getImageUrl, getIndexFromSpecies, getColor };