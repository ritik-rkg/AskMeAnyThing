import Badges from './Badges';
import DropdownCat from './DropdownCat';
import DropdownGroupedCat from './DropdownGroupedCat';
import DropdownNum from './DropdownNum';


const PCP = () => {
  return (
    <>
    {/* <div>PCP</div> */}
      {/* <Badges properties={['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10','P11','P12','P13','P14','P15']} /> */}
    <div className='mx-[20vw] flex justify-between'>
    <DropdownNum/>
    <DropdownCat/>
    <DropdownGroupedCat/>
    </div>
    </>
  );
};

export default PCP;
