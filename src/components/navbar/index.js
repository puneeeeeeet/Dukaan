import {QuestionMark} from '../../icons/questionMark'
import { Icon } from '../icon';
import {SearchNav} from '../../icons/searchNav';
import {Menu} from '../../icons/menu';
import {ArrowNav} from '../../icons/arrowNav';

function Navbar(){
    return(
        <div className=" pl-8 py-3  flex items-center w-full h-16">
            <div className="w-80  inline-flex gap-x-4">
                <div>
                    Payments
                </div>
                <div className='inline-flex gap-x-1 items-center text-textGray text-xs'>
                    <Icon icon={QuestionMark} size='extraSmall' />
                    How it works
                </div>
            </div>
            <div className=' ml-4 w-96 bg-searchBar h-10 items-center flex rounded-md '>
                <div className='ml-4 inline-flex items-center gap-x-2 text-textGray'>
                    <div>
                    <Icon icon={SearchNav} size='lessSmall' />
                    </div>
                    <div>
                    <input type="text" className='bg-searchBar'
                     placeholder="Search features, tutorials, etc."/>
                    </div>
                </div>
            </div>
            <div className='inline-flex absolute right-5 gap-x-2'>
                <div className='rounded-full p-2.5 bg-circleNav w-10 h-10 place-content-center '>
                    <Icon icon={Menu} />
                </div>
                <div className='rounded-full p-2.5 bg-circleNav w-10 h-10 place-content-center '>
                    <Icon icon={ArrowNav} />
                </div>

            </div>
        </div>
    )
}
export default Navbar;