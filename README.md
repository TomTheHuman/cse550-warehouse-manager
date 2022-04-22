# Warehouse Manager

## SQL

### Installation

This project supports Linux and Windows. SQL will not run natively on Mac - alternatives can be found below. Instructions below are for Windows (Linux should be similar).

Make sure the project is not running in Visual Studio or elsewhere.

#### Install SQL Server Express

https://microsoft.com/en-us/sql-server/sql-server-downloads

#### Install SQL Tools

Open PowerShell as an Administrator and run the following commands

```PowerShell
Install-Module -Name "SqlServer" # Accept all the prompts that follow

# To confirm installation
Get-InstalledModule -Name "SqlServer" # The module version and name should appear

dotnet tool install --global dotnet-ef
```

#### Build Database

```PowerShell
dotnet ef database update
```

#### Test SQL

```PowerShell
sqlcmd -S "(localdb)\MSSQLLocalDB"
> use DevDB
> go
# Changed database context to 'DevDB'
> SELECT * FROM information_schema.tables
> go
```

You should see a list of table names including `AspNetRoles` and `InventoryItems`.

#### Seed Database with Mock Data

Navigate to the project root path (`/WarehouseManager`) and run provided SQL script using this commmand:

```PowerShell
sqlcmd -S "(localdb)\MSSQLLocalDB" -E -i "Data\seed.sql"
```

After this, you should have dummy data in all applicable project tables.

**How do I reset my database?**

```PowerShell
sqlcmd -S "(localdb)\MSSQLLocalDB"
```

```SQL
DROP DATABASE DevDb;
Go
```

```PowerShell
dotnet ef database update
```

After this, follow the steps above ('Seed Database with Mock Data') to re-seed data.

### Mac

You can develop using Docker, however this can take time to configure. There are plenty of guides for ASP.NET Core and SQL development on Mac. One example is here.
https://anexinet.com/blog/love-your-mac-love-building-apps-with-asp-net-and-sql-server/

The other option is connecting your ASP.NET Core development workspace to a hosted SQL instance.

1. Open the project solution in Visual Studio

2. Open `appsettings.json`

3. Replace the `ConnectionStrings` value to the following

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=;Database=DevDB;Trusted_Connection=True;MultipleActiveResultSets=true",
    "ProviderName": "SystemData.SqlClient"
}
```

4. Save the file

5. Open your terminal application and ...

#TODO Finish Mac instructions

## Running the App

Open your terminal application (depending on your OS) and follow the steps below.

Navigate to the `ClientApp` directory and run the following commands

```shell
npm install
```

Now open the project solution in Visual Studio. Once open use `F5` to launch the development build. This should build the ASP.NET Core back end and locally host the React front end.

If asked to accept a security certificate, do so.

To host the React front end independently, navigate to `ClientApp` and use the following command

```shell
npm run start
```

View the front end by navigating to `http://localhost:3000`.
