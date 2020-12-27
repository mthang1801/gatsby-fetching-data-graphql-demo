import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../containers/layout"
const getContinents = graphql`
  query {
    countries {
      countries {
        code
        name
        continent {
          name
        }
        emoji
      }
    }
  }
`
const Continents = () => {
  const data = useStaticQuery(getContinents)
  const { countries } = data.countries

  return (
    <Layout>
      <section style={{margin: "2rem auto"}}>
        <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "1rem", borderBottom: "1px solid gray" }}>
          <span style={{ width: "10%" }}>Code</span>
          <span style={{ width: "10%" }}>Continent</span>
          <span style={{ width: "70%" }}>Name</span>
          <span style={{ width: "10%" }}>Flag</span>
        </div>
        {countries.map(country => (
          <article
            key={country.code}
            style={{ display: "flex", justifyContent: "space-around", padding: "0.5rem 0" }}
          >
            <span style={{ width: "10%" }}>{country.code}</span>
            <span style={{ width: "10%" }}>{country.continent.name}</span>
            <span style={{ width: "70%" }}>{country.name}</span>
            <span style={{ width: "10%" }}>{country.emoji}</span>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default Continents
