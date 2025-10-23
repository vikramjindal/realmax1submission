import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

export default function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {statusCode ? `An error ${statusCode} occurred` : 'An error occurred on server'}
        </h1>
        <p className="text-gray-600">Sorry, something went wrong</p>
      </div>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}