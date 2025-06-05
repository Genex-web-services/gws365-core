# GWS365 Shared Models
This contains shared models like User, Payment etc. for reuse across multiple subdomains.


```
| **Level** | **Access Scope**                                     | **Typical Role**                |
| --------- | ---------------------------------------------------- | ------------------------------- |
| `1`       | Full platform access (all tenants, all data)         | Super Admin (GWS Team)          |
| `2`       | Tenant-restricted access (data for specific tenant)  | Tenant Admin, Org Admin (MSP)   |
| `3`       | User-restricted access (only own data within tenant) | End-user or Enterprise Employee |


```