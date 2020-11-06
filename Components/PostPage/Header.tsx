import * as React from 'react'
import styled from 'styled-components'

const BlogHeader = styled.header`
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;

  .logo {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-size: 2.25rem;

    &:hover {
      text-decoration: none;
    }
  }
`

const Header: React.FC = () => {
  return (
    <BlogHeader className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <a className="text-muted" href="www.google.com">
            Subscribe
          </a>
        </div>
        <div className="col-4 text-center">
          <a className="logo text-dark" href="www.google.com">
            CHARM
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="text-muted" href="www.google.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-3"
            >
              <circle cx="10.5" cy="10.5" r="7.5" />
              <line x1="21" y1="21" x2="15.8" y2="15.8" />
            </svg>
          </a>
          <a className="btn btn-sm btn-outline-secondary" href="www.google.com">
            Sign up
          </a>
        </div>
      </div>
    </BlogHeader>
  )
}

export default Header
