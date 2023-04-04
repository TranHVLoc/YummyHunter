import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import RecipeDetail from '../../Detail/RecipeDetail'

const API_KEY = import.meta.env.VITE_APP_API_KEY

const RecipeInfo = () => {

    // The information needed from the url and make a state variable
    // for holding the details to display on the page
    let params = useParams()
    const [fullInfo, setFullInfo] = useState(null)

    // Load the coin's details and description on page load
    useEffect(() => {
        const getRecipeInfo = async () => {
            // Get the meta numbers information of the coin (All the data for TRADING)
            const info = await fetch(
                `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
            )

            // Return the fetched data
            const json = await info.json()

            // Assign to state variable
            setFullInfo(json)
        }

        // Call the method on page load
        getRecipeInfo().catch(console.error)
    }, [])

    return (
        <div className='recipe-detail'>
            {fullInfo ? (
                <>
                    {/* Tiltle and image */}
                    <h1>{fullInfo.title}</h1>
                    <img
                        className="images"
                        src={fullInfo.image}
                        alt={`Image for ${fullInfo.title}`}
                    />
                    {/* Description */}
                    <div
                        dangerouslySetInnerHTML={
                            { __html: fullInfo.summary.substring(0, fullInfo.summary.lastIndexOf("</b>")) }
                        }
                    />

                    {/* Additional details
                    <table>
                        <tbody>
                            <tr>
                                <th>Launch Date</th>
                                <td>{fullInfo.textData[params.symbol].AssetLaunchDate}</td>
                            </tr>
                            <tr>
                                <th>Website</th>
                                <td>
                                    <a href={fullInfo.textData[params.symbol].AssetWebsiteUrl} target='blank'>
                                        {fullInfo.textData[params.symbol].AssetWebsiteUrl}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th>Whitepaper</th>
                                <td>
                                    <a href={fullInfo.textData[params.symbol].AssetWhitepaperUrl} target='blank'>
                                        {fullInfo.textData[params.symbol].AssetWhitepaperUrl}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th>Monetary Symbol</th>
                                <td>{fullInfo.textData[params.symbol].Symbol}</td>
                            </tr>
                            <tr>
                                <th>Market</th>
                                <td>{fullInfo.numbers[params.symbol].USD.MARKET}</td>
                            </tr>
                            <tr>
                                <th>Last Transaction</th>
                                <td>{fullInfo.numbers[params.symbol].USD.LASTUPDATE}</td>
                            </tr>
                            <tr>
                                <th>Last Transaction Value</th>
                                <td>{fullInfo.numbers[params.symbol].USD.LASTVOLUMETO} &emsp; {fullInfo.numbers[params.symbol].USD.LASTVOLUME}</td>
                            </tr>
                            <tr>
                                <th>Total Volume in 24 Hours</th>
                                <td>{fullInfo.numbers[params.symbol].USD.TOTALVOLUME24HTO}</td>
                            </tr>
                            <tr>
                                <th>Today's Open Price</th>
                                <td>{fullInfo.numbers[params.symbol].USD.OPENDAY}</td>
                            </tr>
                            <tr>
                                <th>Highest Price during 24 Hours</th>
                                <td>{fullInfo.numbers[params.symbol].USD.HIGH24HOUR}</td>
                            </tr>
                            <tr>
                                <th>Lowest Price during 24 Hours</th>
                                <td>{fullInfo.numbers[params.symbol].USD.LOW24HOUR}</td>
                            </tr>
                            <tr>
                                <th>Change from Previous 24 Hours</th>
                                <td>{fullInfo.numbers[params.symbol].USD.CHANGE24HOUR} &emsp; {fullInfo.numbers[params.symbol].USD.CHANGEPCT24HOUR}%</td>
                            </tr>
                            <tr>
                                <th>Market Cap</th>
                                <td>{fullInfo.numbers[params.symbol].USD.MKTCAP}</td>
                            </tr>
                        </tbody>
                    </table> */}

                    <div className='labelNPrice'>
                        <img
                            className='images'
                            src={`https://api.spoonacular.com/recipes/${params.id}/nutritionLabel.png?apiKey=${API_KEY}`}
                        />
                        <RecipeDetail
                            id={params.id}
                        />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default RecipeInfo