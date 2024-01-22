"use client"
import './index.css'
import Image from 'next/image'
import pokeball from './img/pokeball.svg'
import synvia from './img/synvia-A.svg'
import FilterTop from '../filter-top'
import FilterLeft from '../filter-left'
import Card from '../card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import React, { useEffect, useState  } from 'react'


export default function Home() {

  const [apiResponse, setApiResponse] = useState(null);  
  const [sideTypeFilter, setSideTypeFilter] = useState([]); 
  const [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unpkg.com/pokemons@1.1.0/pokemons.json');        
        let data = Object.entries(response.data)[0][1].map((item) => {
          item.fav = false
          return item
        })
        console.log(data)
        setApiResponse(data)
        setPokemons(data)
        console.log(pokemons)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();     
  }, []);  


  const typeFilter = (newData) => {
    setSideTypeFilter((prevData) => {
      return newData;
    });
    let filteredResults = apiResponse; 

    newData.forEach((type) => {
      
      filteredResults = filteredResults.filter((pokemon) => {
        return pokemon.type.includes(type);
      });
    });
    
    setPokemons(filteredResults);    
  };

  const textFilter = (newData) => {
    setSideTypeFilter(newData);
    console.log("newData", newData)
    
    let filteredResults = pokemons;    
    filteredResults =
      apiResponse.filter((pokemon) =>
        pokemon.name.includes(newData) || pokemon.national_number.includes(newData) 
      )    
    setPokemons(filteredResults);
  };

  const orderFilter = (sortOption) => {
    console.log(sortOption)
    let results = pokemons.sort((a, b) => {
      const numA = parseInt(a.national_number);
      const numB = parseInt(b.national_number);
  
      if (sortOption === 'highNumber') {
        if (numA > numB) {
          return -1
        }

        if (numA < numB) {
          return 1
        }

        return 0;
      } else if (sortOption === 'lowerNumber') {
        if (numA < numB) {
          return -1
        }

        if (numA > numB) {
          return 1
        }

        return 0;      }
  
      
    });
  
    console.log(results);
    setPokemons([...results]); // Usando spread operator para criar uma nova referência
  };

  const favFilter = (showFavs) => {
    if (showFavs) {
      const filteredResults = pokemons.filter((pokemon) => pokemon.fav === true);
      setPokemons(filteredResults);
    } else {      
      setPokemons(apiResponse);
    }
  };
  
  
  
  return (
    <main className="flex flex-col">
      <div className='flex flex-row items-center headerDex'>
        <div className='grow h-14 flex pl-2 mx-20 items-center' dir='ltr'>
          <Image
            src={pokeball}
            alt='Pokedex'
          />
          <span className='pl-4 title'>Pokédex</span>
        </div>
        <div className='grow h-14 flex flex-end pr-2 items-center' dir='rtl'>
          <FontAwesomeIcon className='icon' icon={faSignOut} />
          <Image
            src={synvia}
            alt='Synvia'
          />          
        </div>
      </div>

      <div className='flex my-4 mx-20'>
        <FilterTop onFilter={textFilter} onOrderFilter={orderFilter}></FilterTop>
      </div>

      <div className='flex flex-row contentDex my-4 mx-20'>
        <div className='flex w-1/5 mr-8'>
          <FilterLeft filter={sideTypeFilter} updateArrayTypeFilter={typeFilter} favFilter={favFilter}></FilterLeft>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4'>
          {
            pokemons &&
            pokemons.map((monster, index) => (
              <Card key={index} pokemonData={monster}></Card>
            ))
          }
        </div>
      </div>     
    </main>
  )
}
