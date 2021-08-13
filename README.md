# API Documentation

## Notes :
- All the routes have the prefix "/api".
- The status returns will have the value of : "success" or "error"
- If a validation error happens the code returned will be 422 (Unprocessable Entity) with an array of error validations.
- The A at the begining of declaration means the user has to be authenticated (has to send the authentication token as a bearer token).
- The parameters will be in the form : name_of_the_parameter(validation_rule).
- The returns are returned in case everything worked, it means a 200 code will be returned, if an error happens the framework will handle it by sending the appropriate erro code and message.
- If an authentication errors happens "message": "Unauthenticated." with 401 code will be returned.
- All the data returned by the routes other than status is the value of the key data. (status: success, data: "Rest-of-the-data-or-array-or-object-etc")

## Validation rules explanation : 
- email : must be a valid email (regex).
- string : must be a string.
- max: specifies the max length (max:180 means 180 characters at max).
- min: same as max but for minimum.
- password: minimum 8 letters, must have a number, must have one character in upper case and one in lower.
- int : must be an integer.
- optional : the parameter is not required.
- enum : must be in the enum
- wilaya : must be a valid wilaya code (from 1 to 58).
- array : must be an array

## Resources : 
The following are the Json format returned by some entities, whenever a route returns a resource come check its definition here :

<details>
<summary>AreaResource</summary>

- code (<strong>string</strong>) <br>
- slug (<strong>string</strong>) <br>
- name (<strong>string</strong>) <br>
- created_at (<strong>timestamp</strong>) <br>
- updated_at (<strong>timestamp</strong>) <br>
- parent (<strong>AreaParentResource</strong>) <br>
</details>

<details>
<summary>AreaParentResource</summary>

- code (<strong>string</strong>) <br>
- slug (<strong>string</strong>) <br>
- name (<strong>string</strong>) <br>
- created_at (<strong>timestamp</strong>) <br>
- updated_at (<strong>timestamp</strong>) <br>
- children (<strong>array:AreaResource</strong>) <br>
</details>

<details>
<summary>FileResource</summary>

- url (<strong>string</strong>) <br>
- name (<strong>string</strong>) <br>
- downloaded (<strong>int</strong>) <br>
- seen (<strong>int</strong>) <br>
</details>

<details>
<summary>UserResource</summary>
The <strong>authenticable</strong> depends on the type of the user (company, expert, office, union) <br><br>

```yaml
{
    user : {
            email(**string**), daira(**string**), town(**string**), wilaya(**string**), seen(**int** //how many times the profile of the user was consulted)
    },
    authenticable : {
        type(**string**),

        If it's a company : slug(string), name(**string**), emails(**array:string**), phones(**array:string**), fax(**array:string**), website(**string**), registry_type(**string**), registry(**string**), legal_form(**string**), nif(**string**), nis(**string**), activity_area(**string**), description(**string**), staff_number(**int**), main_activity(**string**), ceo(**string**), creation_date(**date**), cnas_id(**string**), canos_id(**string**), created_at(**timestamp**), updated_at(**timestamp**).

        If it's an expert : slug(**string**), name(**string**), emails(**array:string**), phones(**array:string**), fax(**array:string**), website(**string**), registry_type(**string**), registry(**string**), nif(**string**), nis(**string**), areas(**array:AreaResource**), isTrainer(**bool**), description(**string**), missions_export(**array:string**), missions_quality(**array:string**), cnas_id(**string**), canos_id(**string**), created_at(**timestamp**), updated_at(**timestamp**).

        If it's an office : slug(**string**), name(**string**), emails(**array:string**), phones(**array:string**), fax(**array:string**), website(**string**), registry_type(**string**), registry(**string**), legal_form(**string**), nif(**string**), nis(**string**), areas(**array:AreaResource**), description(**string**), staff_number(**int**), ceo(**string**), missions_export(**array:string**), missions_quality(**array:string**), creation_date(**date**), cnas_id(**string**), canos_id(**string**), created_at(**timestamp**), updated_at(**timestamp**).

        If it's an union : slug(**string**), name(**string**), emails(**array:string**), phones(**array:string**), fax(**array:string**), website(**string**), approval(**string**), ceo(**string**), description(**string**), created_at(**timestamp**), updated_at(**timestamp**).
    }
}
```

</details>

<details>
<summary>EventResource</summary>

- slug (<strong>string</strong>) <br>
- name (<strong>string</strong>) <br>
- description (<strong>string</strong>) <br>
- start (<strong>datetime</strong>) <br>
- end (<strong>datetime</strong>) <br>
- wilaya (<strong>string</strong>) <br>
- daira (<strong>string</strong>) <br>
- town (<strong>string</strong>) <br>
- organizer (<strong>string</strong>) <br>
- images (<strong>array:string</strong>) <br>
- files (<strong>array:FileResource</strong>) <br>
- poster (<strong>UserResource</strong>) <br>
- created_at (<strong>timestamp</strong>) <br>
- updated_at (<strong>timestamp</strong>) <br>
</details>

<details>
<summary>EventUserResource</summary>

- id (<strong>int</strong>) <br>
- user (<strong>UserResource</strong>) <br>
- event (<strong>EventResource</strong>) <br>
</details>

<details>
<summary>ArticleResource</summary>

- slug (<strong>string</strong>) <br>
- title (<strong>string</strong>) <br>
- content (<strong>string</strong>) <br>
- images (<strong>array:string</strong>) <br>
- poster (<strong>UserResource</strong>) <br>
- created_at (<strong>timestamp</strong>) <br>
- updated_at (<strong>timestamp</strong>) <br>
</details>



## Routes :

### Authentication

<details> 
<summary> <strong> /login </strong> </summary>

- Method: **POST**
- Returns: 
    - status.
    - token.
- Parameters : 
    - email.
    - password.

</details>

<details> 
<summary> <strong> /register </strong> </summary>

- Method: **POST**
- Returns: 
    - status.
    - token.
- Parameters: 
    - email(email).
    - password(password). 
    - wilaya(wilaya).
    - daira(string, max:180).
    - town(string, max:180).
    - name(string, max:180  )
    - emails(optional, array, string).
    - phones(optional, array, string).
    - fax(optional, array, string).
    - website(optional, string).
    - type(enum: company, expert, union, office)]

Depending on the type the following parameteres will be required : 
- company : 
    - registry_type(enum: registry, approval).
    - registry(string, max:180).
    - legal_form(string, max:180).
    - nif(string, max:180).
    - nis(string, max:180).
    - activity_area(int, must be a valid id).
    - staff_number(int).
    - main_activity(string, max:180).
    - ceo(string, max:180).
    - creation_date(date).
    - description(optional, string, max:1000).
    - cnas_id(string, max:180).
    - casnos_id(string, max:180)

- expert :  
    - registry_type(enum: registry, approval).
    - registry(string, max:180).
    - nif(string, max:180).
    - nis(string, max:180).
    - areas(array of int represneting the id of areas).
    - description(optional, string, max:1000).
    - cnas_id(string, max:180).
    - casnos_id(string, max:180)

- union: 
    - approval(string, max:180).
    - ceo(string, max:180).
    - description(optional, string, max:1000).

- office: 
    - registry_type(enum: registry, approval).
    - registry(string, max:180).
    - legal_form(string, max:180).
    - nif(string, max:180).
    - nis(string, max:180).
    - areas(array of int represneting the id of areas).
    - staff_number(int).
    - ceo(string, max:180).
    - creation_date(date).
    - description(optional, string, max:1000).
    - cnas_id(string, max:180).
    - casnos_id(string, max:180)

</details>

<details> 
<summary> <strong> /refresh A</strong> </summary>

- Method: **POST**
- Returns :
    - status.
    - token.
</details>

<details> 
<summary> <strong> /logout A </strong> </summary>

- Method: **POST**
- Returns :
    - status.
</details>

### Members

<details> 
<summary> <strong> /members A</strong> </summary>

- Method: **GET**
- Returns :
    - status.
    - array: UserResouce
- Description: retrieve all the users.
</details>

<details> 
<summary> <strong> /members/trainers A</strong> </summary>

- Method: **GET**
- Returns :
    - status.
    - array: UserResouce
- Description: retrieve the Experts with isTrainer set to true (les formateurs).
</details>

<details> 
<summary> <strong> /members/{type} A</strong> </summary>

- {type} values must be one of : company, expert, office, union.
- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: UserResouce
- Description: retrieve all the users of type {type}.
</details>

<details>
<summary> <strong> /members/{type}/{slug} A</strong> </summary>

- {type} values must be one of : company, expert, office, union.
- {slug} is the string that identifies the user.
- Method: <strong>GET</strong>
- Returns :
    - status.
    - UserResouce
- Description: return the specific user who is of type {type} and has the slug {slug}.
</details>

<details>
<summary> <strong> /members/{type}/{slug} A</strong> </summary>

- {type} values must be one of : company, expert, office, union.
- {slug} is the string that identifies the user.
- Method: <strong>PUT</strong>
- Returns :
    - status.
    - UserResouce.
- Description: update a specific user.
- Parameters: same as register.
</details>

<details>
<summary> <strong> /members/{type}/{slug} A</strong> </summary>

- {type} values must be one of : company, expert, office, union.
- {slug} is the string that identifies the user.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: delete a specific user.
</details>

<details>
<summary> <strong> /members/{type}/{slug}/validate A</strong> </summary>

- {type} values must be one of : company, expert, office, union.
- {slug} is the string that identifies the user.
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: validate a specific user (accept).
</details>

### Area Parents

<details>
<summary> <strong> /areas/parents A</strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: AreaParentResource.
- Description: returns an array of all the area parents.
</details>

<details>
<summary> <strong> /areas/parents/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>GET</strong>
- Returns :
    - status.
    - AreaParentResource.
- Description: returns the AreaParent identified by {slug}.
</details>

<details>
<summary> <strong> /areas/parents/ A</strong> </summary>

- Method: <strong>POST</strong>
- Returns :
    - status.
    - AreaParentResource.
- Description: creates a new AreaParent.
- Parameters: 
    - code(</strong>int<strong>).
    - name(</strong>string<strong>).
</details>

<details>
<summary> <strong> /areas/parents/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>PUT</strong>
- Returns:
    - status.
    - AreaParentResource.
- Description: updates the area parent identified by {slug}.
- Parameters: 
    - code(</strong>int<strong>).
    - name(</strong>string<strong>).
</details>

<details>
<summary> <strong> /areas/parents/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: deletes the area parent identified by {slug}.
</details>

### Area Children

<details>
<summary> <strong> /areas/children A</strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: AreaResource.
- Description: returns an array of all the areas.
</details>

<details>
<summary> <strong> /areas/children/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>GET</strong>
- Returns :
    - status.
    - AreaResource.
- Description: returns the Area identified by {slug}.
</details>

<details>
<summary> <strong> /areas/children/ A</strong> </summary>

- Method: <strong>POST</strong>
- Returns :
    - status.
    - AreaResource.
- Description: creates a new Area.
- Parameters: 
    - code(</strong>int<strong>).
    - name(</strong>string<strong>).
</details>

<details>
<summary> <strong> /areas/children/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>PUT</strong>
- Returns :
    - status.
    - AreaResource.
- Description: updates the area identified by {slug}.
- Parameters: 
    - code(</strong>int<strong>).
    - name(</strong>string<strong>).
</details>

<details>
<summary> <strong> /areas/children/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: deletes the area identified by {slug}.
</details>

<details>
<summary> <strong> /areas/children/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: deletes the area identified by {slug}.
</details>

#### Users per Area

<details>
<summary> <strong> /areas/users/{slug} A</strong> </summary>

- {slug}: unique string that identifies the area child.
- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: UserResource.
- Description: returns all the Experts and Offices in this area.
</details>

#### Events

<details>
<summary> <strong> /events/proposals A</strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: EventResource.
- Description: returns all the events that users proposed (that are not yet accepted).
</details>

<details>
<summary> <strong> /events A</strong> </summary>

- Method: <strong>POST</strong>
- Returns :
    - status.
    - EventResource.
- Description: creates a new Event.
- Parameters:
    - name(string, max:180).
    - description(string, max:1000).
    - start(datetime).
    - end(datetime).
    - wilaya(optional, wilaya).
    - daira(optional, string, max:180).
    - town(optional, string, max:180).
    - organizer (optional, string, max:180).
    - images (max:30 and 1gb max per image).
    - files(optional, max:30 and gb max per image).
    - training (bool).
</details>

<details>
<summary> <strong> /events/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>PUT</strong>
- Returns :
    - status.
    - EventResource.
- Description: updates the event identified by {slug}.
- Parameters:
    - name(string, max:180).
    - description(string, max:1000).
    - start(datetime).
    - end(datetime).
    - wilaya(optional, wilaya).
    - daira(optional, string, max:180).
    - town(optional, string, max:180).
    - organizer (optional, string, max:180).
    - images (max:30 and 1gb max per image).
    - files(optional, max:30 and gb max per image).
    - training (bool).
</details>

<details>
<summary> <strong> /events/{slug}/close A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: switches the close boolean of the event identified by {slug} (close = !close)
</details>

<details>
<summary> <strong> /events/{slug}/archive A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: switches the archive boolean of the event identified by {slug} (archive = !archive)
</details>

<details>
<summary> <strong> /events/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: removes the event identified by {slug}
</details>

<details>
<summary> <strong> /events/{slug}/accpet A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: switches the accept boolean of the event identified by {slug} (accept = !accept)
</details>

<details>
<summary> <strong> /events/{slug}/register A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: registers user to the registration list of the event identified by {slug}
- If the user is authenticated then no parameters are needed, the authenticated user will be registered.
- If the user isn't authenticated, the following parameters will be required: TODO LATER
</details>

<details>
<summary> <strong> /events/{slug}/registration_list A</strong> </summary>

- {slug}: unique string that identifies the record
- Method: <strong>GET</strong>
- Returns :
    - status.
    - array: EventUserResource
- Description: returns the registration list of the event identified by {slug}
</details>

<details>
<summary> <strong> /events/{slug}/registration_list/{id} A</strong> </summary>

- {slug}: unique string that identifies the event record
- {id}: unique identifier that identifies the registration record.
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: switches the accept boolean of the registration identified by the event slug and registration id (accepted = !accetped)
</details>

<details>
<summary> <strong> /events/{slug}/registration_list/{id}} A</strong> </summary>

- {slug}: unique string that identifies the event record
- {id}: unique identifier that identifies the registration record.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: removes the registration
</details>

<details>
<summary> <strong> /events/ </strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array:EventResource
- Description: returns the list of events (accepted, not closed, not archived)
</details>

<details>
<summary> <strong> /events/trainings </strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array:EventResource
- Description: returns the list of trainings(accepted, not closed and not archived)
</details>

<details>
<summary> <strong> /events/{slug} </strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - EventResource
- Description: returns the event identified by {slug}.
</details>

#### Articles

<details>
<summary> <strong> /articles A</strong> </summary>

- Method: <strong>POST</strong>
- Returns :
    - status.
    - ArticleResource
- Description: creates a new Article.
- Parameters:
    - title(string, max:180).
    - content(string, max:1000).
    - images (max:30 and 1gb max per image).
</details>

<details>
<summary> <strong> /articles/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>PUT</strong>
- Returns :
    - status.
    - ArticleResource
- Description: updates the Article identified by {slug}
- Parameters:
    - title(string, max:180).
    - content(string, max:1000).
    - images (max:30 and 1gb max per image).
</details>

<details>
<summary> <strong> /articles/{slug} A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>DELETE</strong>
- Returns :
    - status.
- Description: removes the Article identified by {slug}
</details>

<details>
<summary> <strong> /articles/{slug}/archive A</strong> </summary>

- {slug}: unique string that identifies the record.
- Method: <strong>POST</strong>
- Returns :
    - status.
- Description: switches the archived boolean of the Article identified by {slug} (archived = !archived)
</details>

<details>
<summary> <strong> /articles </strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - array:ArticleResource.
- Description: returns the list of articles (archived = false)
</details>

<details>
<summary> <strong> /articles/{slug} </strong> </summary>

- Method: <strong>GET</strong>
- Returns :
    - status.
    - ArticleResource.
- Description: returns the article identified by {slug} (archived = false)
</details>
