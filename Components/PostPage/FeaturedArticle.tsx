import * as React from 'react'
import styled from 'styled-components'

interface StyleProps {
  bgImg: string
}

const Styles = styled.div<StyleProps>`
  background-image: url('${(props) => props.bgImg}');
  background-position: center;
  background-size: cover;
`

interface Post {
  id: string
  title: string
  subtitle: string
  body: string
  image: string
}

const FeaturedArticle: React.FC<{ article: Post }> = ({ article }) => {
  return (
    <Styles
      bgImg={article.image}
      className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
    >
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{article.title}</h1>
        <p className="lead my-3">{article.subtitle}</p>
        <p className="lead mb-0">
          <a href="www.google.com" className="text-white font-weight-bold">
            Continue reading...
          </a>
        </p>
      </div>
    </Styles>
  )
}

export default FeaturedArticle
