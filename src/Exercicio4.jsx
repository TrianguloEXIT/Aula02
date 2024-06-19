export default function Exercicio4({a, b, c}){

  let delta;
  delta = (b*b)-(4*a*c);
  let x1;
  let x2;
  x1 = (-b + Math.sqrt(delta))/(2*a);
  x2 = (-b - Math.sqrt(delta))/(2*a);

  if(delta < 0){
    return(
      <div> 
        <h2>Exercício 4 - Bhaskara</h2>
        <p>
          Dada a equaçao <span style={{color:"blue"}}>{a}x² + {b}x + {c} = 0</span><br/>
          O valor de delta é {delta}<br/>
          <span style={{backgroundColor:"red"}}>O discriminante é diferente e abaixo de zero</span>
        </p>
      </div>
    );
  }
  else if (delta == 0)
  {
    return(
      <div>
        <h2>Exercício 4 - Bhaskara</h2>
        <p>
          Dada a equaçao <span style={{color:"blue"}}>{a}x² + {b}x + {c} = 0</span><br/>
          O valor de delta é {delta}<br/>
          <span style={{backgroundColor:"green"}}>A solução da equação é:<br/>
            {x1}</span>
        </p>
      </div>
    );
  }
  else
  {
    return(
      <div>
        <h2>Exercício 4 - Bhaskara</h2>
        <p>
          Dada a equaçao <span style={{color:"blue"}}>{a}x² + {b}x + {c} = 0</span><br/>
          O valor de delta é {delta}<br/>
          <span style={{backgroundColor:"blue"}}>As soluções da equação são:<br/></span>
            <span style={{fontWeight:"bold", color:"blue"}}>{x1}<br/>{x2}</span>
        </p>
      </div>
    );

  }
}