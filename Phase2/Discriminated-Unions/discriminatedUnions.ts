// A discriminated union is a union of object types that all share one common property
//  (the "discriminant" or "tag"), where that shared property is a literal type with a 
// different value in each variant. TypeScript uses that tag to automatically know exactly 
// which shape it's dealing with.

// The Problem (Without Discriminated Unions)

interface Mail {
  stamp: 'bill' | 'postcard' | 'package';
  amountDue?: number;
  pictureUrl?: string;
  weightInGrams?: number;
}


// The Solution (With Discriminated Unions)

interface Bill {
  stamp: 'bill';      // The clear label
  amountDue: number;  // Only bills have this
}

interface Postcard {
  stamp: 'postcard';   // The clear label
  pictureUrl: string;  // Only postcards have this
}

// We glue them together into a Union using the | symbol
type MailItem = Bill | Postcard;




function processMail(item: MailItem) {
  // Line below causes an error! The computer doesn't know what item is yet.
  // console.log(item.amountDue); 

  if (item.stamp === 'bill') {
    // Inside this block, the computer knows 100% this is a Bill.
    // You can safely use amountDue.
    console.log(item.amountDue); 
  } else {
    // Inside this block, the computer knows 100% this is a Postcard.
    // You can safely use pictureUrl.
    console.log(item.pictureUrl);
  }
}
