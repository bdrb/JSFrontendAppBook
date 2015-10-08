var Person =
{
  typeName: "Person",
  properties:
  {
    firstName: { range: "NonEmptyString", label: "First name",  writable: true, enumerable: true},
    lastName:  { range: "NonEmptyString", label: "Last name", writable: true, enumerable: true}
  },
  methods:
  {
    getInitials: function() {
      return this.firstName.charAt(0) + this.lastName.charAt(0);
    }
  },
  create:
    function(slots)
    {
      var obj = Object.create(this.methods, this.properties);
			
      Object.defineProperty(obj, "type", { value: this, writable: false, enumerable: true});
      
		Object.keys( slots).forEach( function(prop) {
			if( prop in this.properties ) {
			  obj[prop] = slots[prop];
			};
      	}, this);
      return obj;
    }

};

var pers1 = Person.create({firstName: "a", lastName: "b"});
console.log(pers1.getInitials());
