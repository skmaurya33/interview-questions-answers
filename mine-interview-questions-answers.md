# DESIGN Pattern, OOPS, ASP .NET Core, ASP .NET MVC, C# - Interview Questions & Answers

## ---------- DESIGN Pattern ----------

**Q: Explain the SOLID principles with examples?**

The SOLID principles are a set of five design principles intended to make software designs more understandable, flexible, and maintainable. They are especially relevant in object-oriented programming and are often used in designing robust systems in C#, Java, etc.

Here's a quick summary of the SOLID principles:

---

### 1. Single Responsibility Principle (SRP)

_A class should have only one reason to change, meaning it should only have one job or responsibility._

**Example:**

```csharp
// Bad
public class ReportManager {
    public void GenerateReport() { /* logic */ }
    public void SaveToFile() { /* file logic */ }
    public void PrintReport() { /* print logic */ }
}

// Good
public class ReportGenerator {
    public void GenerateReport() { /* logic */ }
}
public class ReportSaver {
    public void SaveToFile() { /* file logic */ }
}
public class ReportPrinter {
    public void PrintReport() { /* print logic */ }
}
```

2.  **O – Open/Closed Principle (OCP):**  
     Software entities (classes, modules, functions) should be open for extension but closed for modification. You should be able to add new functionality without changing existing code.

    **Example:**

```csharp
// Bad: modifying class for new shape
public class AreaCalculator {
    public double CalculateArea(object shape) {
        if (shape is Circle) { /* circle area */ }
        else if (shape is Rectangle) { /* rectangle area */ }
        return 0;
    }
}

// Good: extend by adding new classes
public interface IShape {
    double Area();
}
public class Circle : IShape {
    public double Area() => /* calculate */;
}
public class AreaCalculator {
    public double TotalArea(IShape[] shapes) =>
        shapes.Sum(s => s.Area());
}
```

3.  **L – Liskov Substitution Principle (LSP):**  
    Subtypes must be substitutable for their base types without altering the correctness of the program. In other words, derived classes should extend base classes without changing their behavior.

    **Example:**

```c#
// Bad: Rectangle behavior breaks when used as a Square
public class Rectangle {
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
}

public class Square : Rectangle {
    public override int Width { set { base.Width = base.Height = value; } }

    public override int Height { set { base.Width = base.Height = value; } }
}
```

4.  **I – Interface Segregation Principle (ISP):**  
    Clients should not be forced to depend on interfaces they do not use. It’s better to have many specific interfaces than a single general-purpose interface.

    **Example:**

```c#
// Bad: big interface
public interface IMachine {
    void Print();
    void Scan();
    void Fax();
}

// Good: smaller, focused interfaces
public interface IPrinter {
    void Print();
}

public interface IScanner {
    void Scan();
}
```

5.  **D – Dependency Inversion Principle (DIP):**  
    High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.

    **Example (PHP):**

```c#
// Bad
public class LightBulb {
    public void TurnOn() { }
    public void TurnOff() { }
}
public class Switch {
    private LightBulb bulb = new LightBulb();
    public void Operate() => bulb.TurnOn();
}

// Good
public interface ISwitchable {
    void TurnOn();
    void TurnOff();
}
public class LightBulb : ISwitchable {
    public void TurnOn() { }
    public void TurnOff() { }
}
public class Switch {
    private readonly ISwitchable device;
    public Switch(ISwitchable device) => this.device = device;
    public void Operate() => device.TurnOn();
}
```

These principles help in writing code that is easier to understand,

## ---------- OOPS ----------

1. ### What is Angular Framework?

   Angular is a **TypeScript-based open-source** front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development.

## ---------- ASP .NET Core ----------

1. ### questions
   Answers

## ---------- ASP .NET MVC ----------

1. ### questions
   Answers

## ---------- C# ----------

1. ### questions
   Answers
