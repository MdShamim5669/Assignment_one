const formatValue = (val: number | string | boolean): string | number | boolean => {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    else if (typeof val === 'number') {
        return val * 10;
    }
    else if (typeof val === 'boolean') {
        return !val;
    }
    else {
         throw new Error('Unsuperpted type');
    }
};

const getLength = (val : Tlength) : number => {
    if (typeof val === 'string') {
        return val.length;
    }
    else {
        return val.length;
    }
};

class Person {
    name : string;
    age : number;
    constructor( name : string , age : number ) {
        this.name = name;
        this.age = age;
    }

    getDetails() : string {
        return `'Name: ${this.name} , Age: ${this.age}'`;
    } 
}

const filterByRating = ( Items : Item[] ) : Item[] => {
    return Items.filter(( it ) => it.rating >= 4.0);
};

const filterActiveUsers = ( user : TUser[] ) : TUser[] => {
    return user.filter( val  => val.isActive == true);
};

const printBookDetails = ( book : Book) : string => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable == true ? 'Yes' : 'No'}`);
}

const getUniqueValues = <X , Y> (X : T[], Y : T[]) : T[] => {
    const result : T[] = [];
    
     for ( let i = 0; i < X.length; i++ ) {
         if ( !result.includes(X[i]) ) {
             result.push(X[i]);
         }
        }

    for ( let j = 0; j < Y.length; j++ ) {
        if ( !result.includes(Y[j]) ) {
            result.push(Y[j]);
        }
    }
    return result;

};

const calculateTotalPrice = (products: Product[]): number => {
  if (!products || products.length === 0) {
    return 0;
  }
  const total = products.map(val => {
    const basePrice = val.price * val.quantity;
    const discountPercent = Math.max((typeof val.discount === "number" ? val.discount : 0),0 );
    const RoundFigure = Math.min(discountPercent, 100);
    const final = basePrice * (1 - RoundFigure / 100);
    return final;
  });

  return total.reduce((sum, val) => sum + val, 0);
};
