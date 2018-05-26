import React from 'react'
import PropTypes from 'prop-types'
import PortfolioChart from './PortfolioChart'
// import Allocation from './Allocation'
import { HeaderContainer, RightSide, LeftSide } from './styles'

const getIncrease = (startSum, endSum) => (((endSum - startSum) / startSum) * 100).toFixed(2)

const PortfolioHeader = ({ portfolioYields, marketPrices, planName, portfolio }) => (
    <HeaderContainer>
        <LeftSide>
            <h4>Portfolio yields</h4>
            <PortfolioChart portfolioYields={portfolioYields} marketPrices={marketPrices} planName={planName} />
        </LeftSide>
        <RightSide>
            <div className="plan-results results">
                <h3 className="plan-name">{planName} Formula</h3>
                <p>
                    <span>+{getIncrease(portfolioYields[0].balance, portfolioYields[portfolioYields.length - 1].balance)}% </span>
                    since 2009
                </p>
            </div>
            <div className="market-results results">
                <h3>DJIA</h3>
                <p>
                    <span>+{getIncrease(marketPrices[0].price, marketPrices[marketPrices.length - 1].price)}% </span>
                    since 2009
                </p>
            </div>
            {/* <Allocation portfolio={portfolio} id="allocation-chart" /> */}
        </RightSide>
    </HeaderContainer>
)

PortfolioHeader.propTypes = {
    portfolioYields: PropTypes.array,
    marketPrices: PropTypes.array,
    planName: PropTypes.string,
    portfolio: PropTypes.array,
}

export default PortfolioHeader