import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import {
    Datagrid, Filter,
    List,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
    ImageField,
    EditButton,
    ReferenceField,
    TextField, translate
} from 'react-admin';

const useStyles = makeStyles({
    priceHeader: { fontWeight: 'bold' },
});

const quickFilterStyles = {
    root: {
        marginBottom: '0.7em',
    },
};

const QuickFilter = translate(
    withStyles(quickFilterStyles)(({ classes, label, translate }) => (
        <Chip className={classes.root} label={translate(label)} />
    ))
);

export const ProductFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput
            source="category_id"
            reference="categories"
            sort={{ field: 'id', order: 'ASC' }}
        >
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter
            label="resources.products.fields.stock_lte"
            source="stock_lte"
            defaultValue={10}
        />
    </Filter>
);

const PriceField = props => {
    const classes = useStyles();
    return <TextField headerClassName={classes.priceHeader} {...props} />;
}

const ProductList = props => (
    <List
        {...props}
        filters={<ProductFilter />}
        perPage={20}
        sort={{ field: 'id', order: 'ASC' }}
    >
       <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ImageField source="image" />
            <PriceField source="price" />
            <PriceField source="stock" />
            <ReferenceField source="categoryId" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <PriceField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ProductList;