import * as React from 'react'
import { Box, Container } from '@mui/material'
import NextLink from 'next/link'

export default function Tooltip({ button, className, text, href }) {
  return (
    <>
      <style jsx>
        {`
          .styled,
          .button {
            padding: 15px;
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            -webkit-box-shadow: #2f2b2b 3px 3px 12px;
            -moz-box-shadow: #2f2b2b 3px 3px 12px;
            box-shadow: #2f2b2b 3px 3px 12px;
            border: none;
            font-family: 'Nunito', sans-serif;
            font-weight: 400;
            line-height: 1.5;
            color: black;
            font-size: 18px;
            width: max-content;
            height: auto;
            margin-right: 15px;
          }
        `}
      </style>

      <div className="padding">
        {/* <button className={`styled ${colour}`}>
          <a href="${`link`}">{text}</a>
        </button> */}
        {/* <NextLink href={href}>
          {button ? (
            <button className={className}>{text}</button>
          ) : (
            <a className={className}>{text}</a>
          )}
        </NextLink> */}
      </div>
    </>
  )
}
