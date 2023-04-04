import React, { useEffect, useState } from 'react'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import styles from './PriceBreakdown.module.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY

const RecipeDetail = ({ id }) => {

    const [htmlContent, setHtmlContent] = useState("")

    useEffect(() => {
        const getWidget = async () => {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget?apiKey=${API_KEY}`, {
                headers: {
                    'Accept': 'text/html'
                }
            }
            )

            const data = await response.text();

            // Clean up the fetched query a little bit
            const newData = data.replace("Widget by ", "")

            // Now put it in the HTML content string
            setHtmlContent(newData)
        }

        getWidget().catch(console.error)
    }, [])

    const chartContainer = React.createRef();

    const renderChart = () => {
        const container = chartContainer.current;
        if (container && htmlContent) {
          // Clean up the container before rendering new content
          container.innerHTML = '';
      
          // Add the fetched HTML content to the container
          container.innerHTML = htmlContent;
      
          // Extract and execute the scripts
          const scripts = Array.from(container.getElementsByTagName('script'));
          for (let script of scripts) {
            const newScript = document.createElement('script');
            newScript.innerHTML = script.innerHTML;
            container.appendChild(newScript);
          }
        }
    };
      

    useEffect(() => {
        renderChart();
    }, [htmlContent, chartContainer]);
    
  

    return (
        <div ref={chartContainer} className={`price-breakdown ${styles['my-custom-class']}`} />
    )
}

export default RecipeDetail