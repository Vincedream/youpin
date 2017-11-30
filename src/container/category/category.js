import React from 'react';
import CategoryTab from '../../component/categorytab/categorytab';
import CategorySearch from '../../component/categorysearch/categorysearch';
export default class Category extends React.Component{
    render(){
        return(
            <div>
                <CategorySearch searchText="小米Note3 吴亦凡版开售" />
                <CategoryTab />
               
            </div>
        )
    }
}