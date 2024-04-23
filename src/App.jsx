
import './App.css'

function App() {

  return (
    <>
      <h1>Splitter</h1>
        <div className='container'>
          <div className='column1'>
            <div className='bill'>
              <h4>Bill</h4>
              <div className='bill-input'>
                <input type="text" placeholder='$ 0' />
              </div>
              <div className='select-tip'>
                <h4>Select Tip %</h4>
                <div className='tip-buttons'>

                </div>
                <div className='number-of-people'>
                  <h4>Number of People</h4>
                  <div className='nop-input'>
                    <input type="text" placeholder='p 0' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='column2'>
            <div className='tip-container'>
              <div className='tip-amount-per-person'>
                <h4>Tip Amount / Person</h4>
              </div>
              <div className='tip-amount'>
                <h4>$0.00</h4> 
              </div>
              <div className='total-per-person'>
                <h4>Total / Person</h4>
              </div>
              <div className='total-amount'>
                <h4>$0.00</h4>
              </div>
            </div>
            <button>RESET</button>
          </div>

      </div>
    </>
  )
}

export default App
