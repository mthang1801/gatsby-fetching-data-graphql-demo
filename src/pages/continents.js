import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../containers/layout";
const getContinents = graphql`
  query {
    countries{
      continents {
        code 
        name        
      }
    }
  }
`
const Continents = () => {
  const data = useStaticQuery(getContinents)
  const {continents} = data.countries
  
  return (
    <Layout>
      <section>
        {continents.map(continent => (
          <article key={continent.code}>
            <span className="mr-2">{continent.code}</span>
            <span>{continent.name}</span>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default Continents
