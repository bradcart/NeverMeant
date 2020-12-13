import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      nm1: file(relativePath: { eq: "nm1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nm2: file(relativePath: { eq: "nm2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return src === 1 ? (
    <Img fluid={data.nm1.childImageSharp.fluid} alt="Never Meant in the stu" />
  ) : src === 2 ? (
    <Img fluid={data.nm2.childImageSharp.fluid} alt="the boys" />
  ) : null
}

export default Image
