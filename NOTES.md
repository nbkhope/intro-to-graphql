# Notes

## Random

* To resolve circular references, make the value of `fields` a function that returns an object.
* There's no way to tell GraphQL we expect nothing back.

## Queries

```graphql
query fetchCompany {
  company(id: "1") {
    # ...
  }
}
```

### Multiple records of the same type

```graphql
{
  someCompany: company(id: "1") {
    # ...
  }
  anotherCompany: company(id: "2") {
    # ...
  }
}
```

Why? Objects cannot have the same, duplicate key.

## Query Fragments

So you don't have to type the same field requirements over and over.

```graphql
{
  someCompany: company(id: "1") {
    ...companyDetails
  }
  anotherCompany: company(id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```
