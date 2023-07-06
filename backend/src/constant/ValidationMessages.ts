export class ValidationMessages {

  public static readonly NUMBER_MUST_BE_POSITIVE = " must be positive";
  public static readonly ID_IS_NEGATIVE = "Id" + this.NUMBER_MUST_BE_POSITIVE;
  public static readonly PRICE_IS_NEGATIVE = "Price" +
      this.NUMBER_MUST_BE_POSITIVE;
  public static readonly WEIGHT_IS_NEGATIVE = "Weight" +
      this.NUMBER_MUST_BE_POSITIVE;
  public static readonly AMOUNT_IS_NEGATIVE = "Amount" +
      this.NUMBER_MUST_BE_POSITIVE;
  public static readonly WARRANTY_IS_NEGATIVE = "Warranty" +
      this.NUMBER_MUST_BE_POSITIVE;


  public static readonly VALUE_IS_TOO_LONG = " must not be over this amount of characters: ";
  public static readonly VALUE_IS_TOO_SHORT = " must not be less than this amount of characters: ";
  public static readonly VALUE_MUST_BE_STRING = " must be string";
  public static readonly VALUE_MUST_BE_NUMBER_STRING = " must be number string";
  public static readonly VALUE_MUST_BE_EMAIL = " must be email";

  public static readonly EMAIL_MUST_BE_EMAIL = "Email" +
      this.VALUE_MUST_BE_EMAIL;
  public static readonly PASSWORD_IS_TOO_LONG = "Password" +
      this.VALUE_IS_TOO_LONG;
  public static readonly PASSWORD_IS_TOO_SHORT = "Password" +
      this.VALUE_IS_TOO_SHORT;

  public static readonly NAME_MUST_BE_STRING = "Name" +
      this.VALUE_MUST_BE_STRING;
  public static readonly NAME_IS_TOO_SHORT = "Name" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly NAME_IS_TOO_LONG = "Name" +
      this.VALUE_IS_TOO_LONG;


  public static readonly ICON_MUST_BE_STRING = "Icon" +
      this.VALUE_MUST_BE_STRING;
  public static readonly ICON_IS_TOO_SHORT = "Icon" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly ICON_IS_TOO_LONG = "Icon" +
      this.VALUE_IS_TOO_LONG;

  public static readonly ADDRESS_MUST_BE_STRING = "Address" +
      this.VALUE_MUST_BE_STRING;
  public static readonly ADDRESS_IS_TOO_SHORT = "Address" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly ADDRESS_IS_TOO_LONG = "Address" +
      this.VALUE_IS_TOO_LONG;

  public static readonly SURNAME_MUST_BE_STRING = "Surname" +
      this.VALUE_MUST_BE_STRING;
  public static readonly SURNAME_IS_TOO_SHORT = "Surname" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly SURNAME_IS_TOO_LONG = "Surname" +
      this.VALUE_IS_TOO_LONG;

  public static readonly FIRSTNAME_MUST_BE_STRING = "firstname" +
      this.VALUE_MUST_BE_STRING;
  public static readonly FIRSTNAME_IS_TOO_SHORT = "firstname" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly FIRSTNAME_IS_TOO_LONG = "firstname" +
      this.VALUE_IS_TOO_LONG;

  public static readonly USERNAME_IS_TOO_LONG = "Username" +
      this.VALUE_IS_TOO_LONG;
  public static readonly PHONE_NUMBER_IS_TOO_LONG = "Phone number" +
      this.VALUE_IS_TOO_LONG;
  public static readonly USERNAME_IS_TOO_SHORT = "Username" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly PHONE_NUMBER_IS_TOO_SHORT = "Phone number" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly EMAIL_IS_TOO_LONG = "Email" +
      this.VALUE_IS_TOO_LONG;
  public static readonly EMAIL_IS_TOO_SHORT = "Email" +
      this.VALUE_IS_TOO_SHORT;
  public static readonly USERNAME_MUST_BE_STRING = "Username" +
      this.VALUE_MUST_BE_STRING;
  public static readonly PHONE_NUMBER_MUST_BE_NUMBER_STRING = "Phone number" +
      this.VALUE_MUST_BE_NUMBER_STRING;
  public static readonly EMAIL_MUST_BE_STRING = "Email" +
      this.VALUE_MUST_BE_STRING;
  public static readonly PASSWORD_MUST_BE_STRING = "Password" +
      this.VALUE_MUST_BE_STRING;


  public static readonly MUST_BE = "must be"
  public static readonly SORTING_TYPE_MUST_BE_ENUM = this.MUST_BE + "ASC or DESC";
  public static readonly CREATED_AT_MUST_BE_SORTING_TYPE = "createdAt" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly UPDATED_AT_MUST_BE_SORTING_TYPE = "updatedAt" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly DELETED_AT_MUST_BE_SORTING_TYPE = "deletedAt" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly NAME_MUST_BE_SORTING_TYPE = "name" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly PRICE_MUST_BE_SORTING_TYPE = "price" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly WEIGHT_MUST_BE_SORTING_TYPE = "weight" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly AMOUNT_MUST_BE_SORTING_TYPE = "amount" + this.SORTING_TYPE_MUST_BE_ENUM;
  public static readonly WARRANTY_MUST_BE_SORTING_TYPE = "warranty" + this.SORTING_TYPE_MUST_BE_ENUM;
}